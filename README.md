# Guia de Configuração e Execução do APP MOBILE WEB3 para MAC

Este guia destina-se a auxiliar iniciantes na configuração e execução do projeto APP MOBILE WEB3 em um ambiente Mac, detalhando cada passo necessário para um setup eficaz.

## Índice
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Execução do App](#execução-do-app)
- [Geração de APK](#geração-de-apk)
- [Problemas Comuns e Soluções](#problemas-comuns-e-soluções)
- [Alteração da Versão do Java](#alteração-da-versão-do-java)
- [Configuração do Android Studio](#configuração-do-android-studio)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Pré-requisitos
Certifique-se de ter instalado:
- Node.js
- Yarn (opcional, npm também é suportado)
- Expo CLI

## Configuração do Ambiente
1. **Instalar Dependências do React Native:**
   ```bash
   rm -rf node_modules
   npm install -g react-native-cli
   npm install -g react-native
   npm install
   ```

   ```bash
   ./gradlew wrapper --gradle-version=8.7 --distribution-type=all
   ```

2. **Instalar o Expo CLI e Ferramentas Relacionadas:**
   ```bash
   npm install -g expo-cli
   npm install -g @expo/ngrok@4.1.0
   npm install -g eas-cli
   ```

3. **Limpar Cache do npm e Gradle:**
   ```bash
   npm start -- --reset-cache
   cd android
   ./gradlew clean
   npm cache clean --force
   ./gradlew --stop
   rm -rf $HOME/.gradle/caches/
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

## Uso do Comando Doctor

Em caso de problemas na configuração do APP, execute o comando ./doctor. Este comando executa uma série de verificações e ações automatizadas para identificar e corrigir problemas comuns, como configurações de ambiente, compatibilidade de versões do Gradle com Java, entre outros. O comando ./doctor realiza as seguintes ações:

Verifica a configuração do ambiente Android (ANDROID_HOME).
Executa comandos do Gradle para limpar, compilar e testar o projeto.
Verifica a instalação e configuração do Expo e Expo Ngrok.
Script do Doctor:

```bash
./doctor
```

## Geração de APK
Siga os passos abaixo para gerar um APK:
1. Instalar eas-cli:
   ```bash
   npm install -g eas-cli
   eas login
   eas build:configure
   ```
2. Configurar `eas.json`:
   ```json
   "preview": {
      "android": {
        "buildType": "apk"
      }
   },
   ```
3. Iniciar o build:
   ```bash
   eas build -p android --profile preview
   ```

## Problemas Comuns e Soluções
- **DeprecationWarning do Punycode:**
  - Solução: Substitua o uso de `punycode` ou atualize pacotes dependentes.
- **Incompatibilidade de Versões do Gradle e Java:**
  - Solução: Verifique e sincronize as versões do Java e Gradle.
- **Problemas ao Inicializar o Gradle:**
  - Solução: Execute `gradle init` e configure o projeto Gradle.
- **Dificuldades com o Expo:**
  - Solução: Verifique a configuração do Expo CLI e a conectividade de rede.

## Alteração da Versão do Java
Para alterar a versão do Java, siga as etapas abaixo:
1. Verifique o ambiente com:
   ```bash
   npx expo-doctor
   ```
2. Instale e selecione a versão desejada do Java:
   ```bash
   sdk install java 11.0.22-amzn
   sdk use java 11.0.22-amzn
   ```

## Configuração do Android Studio
Configure o Android Studio com os seguintes comandos:
```bash
echo 'export ANDROID_HOME=/Users/<username>/Library/Android/sdk' >> ~/.zshrc
echo 'export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH' >> ~/.zshrc
source ~/.zshrc
```

## Contribuição
Contribuições são sempre bem-vindas. Para mudanças significativas, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença
Este projeto está licenciado sob a MIT License.
