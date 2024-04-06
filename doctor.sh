#!/bin/bash

# Arquivo de saída
OUTPUT_FILE="doctor_report.txt"

# Inicializando o arquivo de saída
echo "Relatório do Doctor Script - $(date)" > $OUTPUT_FILE

# Cores para as mensagens (desativadas na exportação para evitar caracteres de controle)
RED=''
GREEN=''
YELLOW=''
BLUE=''
NC=''

# Ícones
CHECK_ICON="✅"
ERROR_ICON="❌"
INFO_ICON="ℹ️"

# Diretório do projeto Android (modifique se necessário)
ANDROID_DIR="android"

# Função para imprimir mensagens com ícones e redirecionar para o arquivo
print_message() {
    local color=$1
    local icon=$2
    local message=$3
    echo -e "${color}${icon} ${message}${NC}" | tee -a $OUTPUT_FILE
}

# Função para verificar se um comando falhou e redirecionar para o arquivo
check_failure() {
    if [ $? -ne 0 ]; then
        print_message "$RED" "$ERROR_ICON" "Falha detectada. Saindo..."
        exit 1
    fi
}

# Função para executar tarefas do Gradle e redirecionar para o arquivo
execute_gradle_task() {
    local task=$1
    print_message "$BLUE" "$INFO_ICON" "Executando '$task'..."
    ./gradlew $task | tee -a $OUTPUT_FILE
    check_failure
}

print_message "$YELLOW" "$INFO_ICON" "Iniciando a verificação do ambiente do projeto Android..."

# Verifica se ANDROID_HOME está configurado
if [ -z "$ANDROID_HOME" ]; then
    print_message "$RED" "$ERROR_ICON" "ANDROID_HOME não está configurado."
    exit 1
else
    print_message "$GREEN" "$CHECK_ICON" "ANDROID_HOME está configurado em: $ANDROID_HOME"
fi

# Muda para o diretório android do projeto
cd $ANDROID_DIR
check_failure

# Executa tarefas do Gradle
execute_gradle_task "tasks"
execute_gradle_task "clean"
execute_gradle_task "assembleDebug"
execute_gradle_task "lint"
execute_gradle_task "test"

# Voltar para o diretório original
cd -

print_message "$GREEN" "$CHECK_ICON" "Verificação concluída com sucesso!"
