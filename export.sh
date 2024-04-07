#!/bin/bash

# Install the spinner package if not already installed
pip install spinner &> /dev/null

# Function to execute a command and display its output
execute_command() {
    local command=$1
    echo -e "\nExecutando comando: $command\n"
    eval $command
}

# Function to execute a command inside a spinner animation
execute_command_with_spinner() {
    local command=$1
    spinner="$2"
    echo -e "\nExecutando comando com spinner: $command\n"
    $command & spinner_pid=$!
    while kill -0 $spinner_pid &>/dev/null; do
        printf "."
        sleep 0.5
    done
    echo -e "\n"
}

# Configure and validate the input parameters
if [ "$1" == "type" ]; then
    PYTHON_SCRIPT="./export/export.py fix-build"
elif [ "$1" == "--help" ]; then
    PYTHON_SCRIPT="./export/export.py --help"
else
    PYTHON_SCRIPT="./export/export.py"
fi

# Set the environment parameters for Python
export OUTPUT_FILE="export_report.txt"
export ANDROID_DIR="android"
export ANIMATION=true

# Install Python dependencies
echo -e "\nInstalando dependências Python...\n"
pipenv install

# Execute the Python script with spinner animation and display the output
execute_command_with_spinner "pipenv run python $PYTHON_SCRIPT" "bouncingBall"

# Display a table of all executed commands
echo -e "\n\nTabela de comandos executados:\n"
echo "-------------------------------------------"
echo " Comando                                    "
echo "-------------------------------------------"
echo " pipenv install                             "
echo " pipenv run python $PYTHON_SCRIPT           "
echo "-------------------------------------------"

