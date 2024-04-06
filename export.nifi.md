Para resolver seu problema usando o Apache NiFi, você terá que configurar um fluxo de dados (dataflow) que cumpra as seguintes etapas:

1. **Acesso ao Repositório Git**: Para começar, você precisa de um meio de acessar os arquivos no repositório Git. O Apache NiFi não possui um processador nativo para interagir diretamente com repositórios Git, então uma abordagem comum é clonar o repositório em um diretório que o NiFi possa acessar.

2. **Listagem e Filtragem de Arquivos**: Utilize processadores como `ListFile` e `FetchFile` para listar e recuperar os arquivos do diretório. Estes processadores podem ser configurados para filtrar os arquivos com base em seu nome, tamanho, e outras propriedades.

3. **Aplicação de Regras Específicas**:
    - **Limitar o Tamanho do Arquivo**: Use o processador `RouteOnAttribute` para filtrar arquivos com base no seu tamanho (até 15 MB).
    - **Ignorar Arquivos do `.gitignore`**: Isso pode ser mais desafiador, pois requer que o NiFi leia e interprete o arquivo `.gitignore`. Uma abordagem seria usar um script customizado com um processador `ExecuteScript` para implementar essa lógica.
    - **Ignorar Arquivos Com "." no Início**: Novamente, `RouteOnAttribute` pode ser configurado para descartar arquivos que correspondam a esse padrão.

4. **Exportação de Conteúdo**:
    - Use o processador `FetchFile` para buscar o conteúdo dos arquivos que passaram pela filtragem.
    - Para converter o conteúdo em Base64, você pode usar o `ExecuteScript` com um script personalizado.

5. **Construção do Dashboard**:
    - Para criar um dashboard com totais, você pode usar processadores como `UpdateAttribute` e `MergeContent` para consolidar informações e criar um sumário.
    - O processador `PutFile` pode ser usado para escrever este dashboard em um arquivo.

6. **Exportação Final**: Com o `PutFile` ou similar, exporte o conteúdo processado e o dashboard para um local de sua escolha.

### Configuração Básica no Apache NiFi

1. **ListFile**:
   - Configure o diretório do repositório clonado.
   - Defina filtros de nome de arquivo, data, e tamanho.

2. **RouteOnAttribute**:
   - Crie condições customizadas para filtrar arquivos baseados em seus atributos.

3. **ExecuteScript**:
   - Escreva scripts para interpretar `.gitignore` e converter conteúdo para Base64.

4. **FetchFile**:
   - Recupere os arquivos que passaram pela filtragem.

5. **UpdateAttribute e MergeContent**:
   - Use para gerar e agregar informações para o dashboard.

6. **PutFile**:
   - Salve os arquivos filtrados e o dashboard.

### Nota Importante

A configuração exata e a implementação do fluxo de dados dependem das especificidades do seu ambiente e dos detalhes do seu repositório. O Apache NiFi oferece flexibilidade, mas pode exigir um entendimento aprofundado de processamento de dados e da própria ferramenta para implementar fluxos complexos de forma eficaz.