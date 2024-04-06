#!/bin/bash

# Prefixo do nome do arquivo de saída
prefixo_arquivo_saida="APP_MOBILE_WEB3"

# Inicializa contador de arquivo
contador_arquivo=1

# Tamanho máximo do arquivo em kilobytes (15MB)
max_tamanho_kb=$((15*1024))

# Inicia um novo arquivo de saída
arquivo_saida="${prefixo_arquivo_saida}_${contador_arquivo}.txt"
> "$arquivo_saida"

# Processa cada arquivo
find . -type f -print0 | while IFS= read -r -d '' file; do
    tamanho_arquivo_kb=$(du -k "$file" | cut -f1)

    # Verifica se é necessário iniciar um novo arquivo devido ao tamanho
    tamanho_atual_kb=$(du -k "$arquivo_saida" | cut -f1)
    if [ $((tamanho_atual_kb + tamanho_arquivo_kb)) -ge $max_tamanho_kb ]; then
        contador_arquivo=$((contador_arquivo+1))
        arquivo_saida="${prefixo_arquivo_saida}_${contador_arquivo}.txt"
        > "$arquivo_saida"
    fi

    # Adiciona o conteúdo do arquivo ao arquivo de saída
    echo "Caminho do arquivo: $file" >> "$arquivo_saida"
    echo "Conteúdo do arquivo:" >> "$arquivo_saida"
    cat "$file" >> "$arquivo_saida"
    echo -e "\n\n" >> "$arquivo_saida"

done

echo "Conteúdo dos arquivos exportado para arquivos iniciando com $prefixo_arquivo_saida"
