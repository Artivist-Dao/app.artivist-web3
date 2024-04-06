#!/bin/bash

# Obter o diretório atual do script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Configurar e validar os parâmetros de entrada
if [ "$1" == "fix-build" ]; then
    PYTHON_SCRIPT="$SCRIPT_DIR/doctor/doctor.py fix-build"
elif [ "$1" == "--help" ]; then
    PYTHON_SCRIPT="$SCRIPT_DIR/doctor/doctor.py --help"
else
    PYTHON_SCRIPT="$SCRIPT_DIR/doctor/doctor.py"
fi

# Configurar os parâmetros de envio para o Python
export OUTPUT_FILE="doctor_report.txt"
export ANDROID_DIR="android"
export CHECKS=("ANDROID_CONFIG" "EXPO" "EXPO_NGROK" "COMPATIBLE_VERSION_OF_GRADLE_WITH_JAVA" "CHECK_ENV_VARIABLES")
export ANIMATION=true

# Baixar as dependências do Python
pipenv install

# Executar o script Python
pipenv run python $PYTHON_SCRIPT
