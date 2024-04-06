# Guia de Configuração e Execução do APP MOBILE WEB3 no MAC

Este guia tem como objetivo auxiliar iniciantes na configuração e execução do projeto APP MOBILE WEB3 em um ambiente Mac.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Execução do App](#execução-do-app)
- [Problemas Comuns e Soluções](#problemas-comuns-e-soluções)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Pré-requisitos

Antes de começar, você precisará instalar:
- Node.js
- Yarn (opcional, pode-se usar npm)
- Expo CLI

## Configuração do Ambiente

1. **Instalar Dependências do React Native:**
   ```bash
   npm install -g react-native-cli
   npm install -g react-native
   ```

2. **Instalar o Expo CLI e Ferramentas Relacionadas:**
   ```bash
   npm install -g expo-cli
   npm install -g @expo/ngrok@4.1.0
   npm install -g eas-cli
   ```

3. **Limpar o Cache do npm:**
   ```bash
   npm cache clean --force
   ```

## Execução do App

- **Iniciar o Projeto com Expo:**
  ```bash
  npx expo start --tunnel -c
  ```

- **Executar Localmente para Android:**
  ```bash
  npx eas build --local -p android
  ```

## Problemas Comuns e Soluções

1. **DeprecationWarning do Punycode:**
   - Aviso de obsolescência do módulo `punycode`.
   - Solução: Substitua o uso do módulo `punycode` ou atualize pacotes de terceiros que o utilizam.

2. **Incompatibilidade de Versões do Gradle e Java:**
   - Verifique a versão do Java e do Gradle:
     ```bash
     java -version
     gradle --version
     ```
   - Solução: Garanta que as versões do Java e do Gradle sejam compatíveis.

3. **Problemas ao Inicializar o Gradle:**
   - Erro ao executar `gradle wrapper`.
   - Solução: Execute `gradle init` e configure o projeto Gradle.

4. **Problemas ao Executar o Projeto no Expo:**
   - Dificuldades ao tentar executar o projeto com o Expo.
   - Solução: Siga as instruções de configuração do Expo CLI e verifique a conectividade de rede.

## Contribuição

Contribuições são bem-vindas. Para mudanças significativas, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença

Este projeto está sob a licença MIT.
