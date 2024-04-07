import os

# Configurações
MAX_SIZE_MB = 15
IGNORED_FILES = set()  # Arquivos ignorados (serão carregados do .gitignore)

# Carregar .gitignore
def load_gitignore():
    try:
        with open('.gitignore', 'r') as f:
            for line in f:
                IGNORED_FILES.add(line.strip())
    except FileNotFoundError:
        print(".gitignore não encontrado.")

# Listar arquivos na raiz
def list_files():
    file_list = []
    # Listar apenas arquivos no diretório atual
    for file in os.listdir('.'):
        if file in IGNORED_FILES or file.startswith('.'):
            continue
        if os.path.isfile(file):
            size_mb = os.path.getsize(file) / (1024 * 1024)
            if size_mb <= MAX_SIZE_MB:
                file_list.append(file)
    return file_list

# Exportar arquivos
def export_files(file_list):
    # Adicione aqui a lógica de exportação conforme necessário
    pass

def main():
    load_gitignore()
    file_list = list_files()
    export_files(file_list)
    # Adicione aqui a lógica para criar o dashboard

if __name__ == "__main__":
    main()
