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

# Função para executar comandos e redirecionar para o arquivo
execute_command() {
    local command=$1
    print_message "$BLUE" "$INFO_ICON" "Executando '$command'..."
    eval $command | tee -a $OUTPUT_FILE
    check_failure
}

# Executa o passo a passo para resolver problemas de compilação
run_build_fix_steps() {
    print_message "$YELLOW" "$INFO_ICON" "Iniciando o passo a passo para correção de erros de compilação..."

    execute_command "cd android && ./gradlew clean"
    execute_command "cd .. && npm install"
    execute_command "cd android && ./gradlew assembleDebug"
    execute_command "cd .."
}

# Exibe a ajuda do script
print_help() {
    echo "Uso: ./doctor.sh [opção]"
    echo "Opções disponíveis:"
    echo "  fix-build   Executa uma série de comandos para tentar corrigir erros de compilação"
    echo "  --help      Mostra esta mensagem de ajuda"
    echo "Se nenhum argumento for fornecido, o script executará verificações padrões no ambiente de desenvolvimento."
}

# Verifica se o argumento --help foi fornecido
if [ "$1" == "--help" ]; then
    print_help
    exit 0
fi

# Verifica se ANDROID_HOME está configurado
if [ -z "$ANDROID_HOME" ]; then
    print_message "$RED" "$ERROR_ICON" "ANDROID_HOME não está configurado."
    exit 1
else
    print_message "$GREEN" "$CHECK_ICON" "ANDROID_HOME está configurado em: $ANDROID_HOME"
fi

# Verifica se o script foi chamado com um parâmetro específico para corrigir erros de compilação
if [ "$1" == "fix-build" ]; then
    run_build_fix_steps
else
    # Executa as verificações padrões
    print_message "$YELLOW" "$INFO_ICON" "Iniciando a verificação do ambiente do projeto Android..."

    # Muda para o diretório android do projeto
    cd $ANDROID_DIR
    check_failure

    # Executa tarefas do Gradle
    execute_command "./gradlew tasks"
    execute_command "./gradlew clean"
    execute_command "./gradlew assembleDebug"
    execute_command "./gradlew lint"
    execute_command "./gradlew test"

    # Voltar para o diretório original
    cd -
fi

print_message "$GREEN" "$CHECK_ICON" "Verificação concluída com sucesso!"