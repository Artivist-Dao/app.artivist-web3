import os
import subprocess
import sys
from datetime import datetime

# Configurações
OUTPUT_FILE = "doctor_report.txt"
ANDROID_DIR = "android"

# Contadores para o dashboard
TOTAL_CHECKS = 0
SUCCESS_COUNT = 0
FAILURE_COUNT = 0

# Lista de comandos executados
executed_commands = []

# Função para imprimir mensagens com ícones e redirecionar para o arquivo
def print_message(color, icon, message):
    with open(OUTPUT_FILE, "a") as file:
        output = f"{color}{icon} {message}\n"
        print(output, end="")
        file.write(output)

# Função para verificar se um comando falhou e redirecionar para o arquivo
def check_failure(returncode):
    global FAILURE_COUNT
    if returncode != 0:
        print_message("\033[91m", "❌", "Falha detectada. Saindo...")
        FAILURE_COUNT += 1
        exit(1)

# Função para executar comandos e redirecionar para o arquivo
def execute_command(command):
    global SUCCESS_COUNT, TOTAL_CHECKS
    print_message("\033[94m", "ℹ️", f"Executando '{command}'...")
    executed_commands.append(command)
    with open(OUTPUT_FILE, "a") as file:
        file.write(f"{datetime.now()} - Executando '{command}'...\n")
    try:
        result = subprocess.run(command, shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, universal_newlines=True, encoding="utf-8", errors="ignore")
        print_message("\033[92m", "✅", f"{result.stdout.strip()}")
        SUCCESS_COUNT += 1
    except subprocess.CalledProcessError as e:
        print_message("\033[91m", "❌", f"{e.output.strip()}")
        check_failure(e.returncode)
    TOTAL_CHECKS += 1

# Verifica se ANDROID_HOME está configurado
def check_android_home():
    android_home = os.environ.get("ANDROID_HOME")
    if android_home is None:
        print_message("\033[91m", "❌", "ANDROID_HOME não está configurado.")
        return False
    else:
        print_message("\033[92m", "✅", f"ANDROID_HOME está configurado em: {android_home}")
        return True

# Executa o passo a passo para resolver problemas de compilação
def run_build_fix_steps():
    print_message("\033[93m", "ℹ️", "Iniciando o passo a passo para correção de erros de compilação...")
    execute_command("cd android && ./gradlew clean")
    execute_command("cd .. && npm install")
    execute_command("cd android && ./gradlew assembleDebug")
    execute_command("cd ..")

# Verifica se o script foi chamado com um parâmetro específico para corrigir erros de compilação
def check_args():
    if len(sys.argv) > 1 and sys.argv[1] == "fix-build":
        run_build_fix_steps()
    else:
        # Executa as verificações padrões
        print_message("\033[93m", "ℹ️", "Iniciando a verificação do ambiente do projeto Android...")

        # Muda para o diretório android do projeto
        os.chdir(ANDROID_DIR)
        check_failure(0)

        # Executa tarefas do Gradle
        execute_command("./gradlew tasks")
        execute_command("./gradlew clean")
        execute_command("./gradlew assembleDebug")
        execute_command("./gradlew lint")
        execute_command("./gradlew test")

        # Voltar para o diretório original
        os.chdir("..")

# Função principal
def main():
    # Arquivo de saída
    with open(OUTPUT_FILE, "w") as file:
        file.write(f"Relatório do Doctor Script - {datetime.now()}\n")

    # Verifica se ANDROID_HOME está configurado
    if check_android_home():
        check_args()

    # Exibir o dashboard
    print("\n\nDashboard:\n")
    print("-------------------------------------------")
    print(f" Total de Verificações:       {TOTAL_CHECKS}")
    print(f" Verificações Bem-Sucedidas: {SUCCESS_COUNT}")
    print(f" Verificações com Falha:     {FAILURE_COUNT}")
    print("-------------------------------------------")

    print_message("\033[92m", "✅", "Verificação concluída com sucesso!")

# Executa o programa principal
if __name__ == "__main__":
    main()
