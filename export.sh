#!/bin/bash

# Nome do arquivo de saída
arquivo_saida="APP_MOBILE_WEB3.txt"

# Limpa o arquivo de saída ou cria se não existir
> "$arquivo_saida"

# Tamanho máximo do arquivo em kilobytes
max_tamanho_kb=15

# Constrói uma string com os padrões de exclusão baseados no .gitignore e exclui a pasta .git
exclusoes="-not -path './.git*'"
if [ -f .gitignore ]; then
    while read line; do
        # Ignora linhas vazias e comentários no .gitignore
        if [ ! -z "$line" ] && [ ! ${line:0:1} == "#" ]; then
            # Adiciona o padrão à string de exclusão
            exclusoes="$exclusoes -not -path './$line'"
        fi
    done < .gitignore
fi

# Encontra todos os arquivos (ignorando diretórios, .git e excluindo padrões do .gitignore) e processa cada um
eval "find . -type f $exclusoes" | while read file; do
    tamanho_kb=$(du -k "$file" | cut -f1)
    if [ $tamanho_kb -le $max_tamanho_kb ]; then
        echo "Caminho do arquivo: $file" >> "$arquivo_saida"
        echo "Conteúdo em base64:" >> "$arquivo_saida"
        base64 "$file" >> "$arquivo_saida"
        echo -e "\n\n" >> "$arquivo_saida"
    else
        echo "Caminho do arquivo: $file" >> "$arquivo_saida"
        echo "Erro: arquivo excede o limite de tamanho de 15KB" >> "$arquivo_saida"
        echo -e "\n\n" >> "$arquivo_saida"
    fi
done

echo "Conteúdo dos arquivos em base64 exportado para $arquivo_saida"
