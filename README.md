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
    rm -rf node_modules
    npm install -g react-native-cli
    npm install -g react-native
    npm install
   ```

   ./gradlew wrapper --gradle-version=8.7 --distribution-type=all

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

## Como gerar uma APK

Código geração de um APK:

* 1 - npm install -g eas-cli
* 2 - eas login
* 3 - eas build:configure
* 4 - configurar o arquivo eas com :

```bash
"preview": {
      "android": {
        "buildType": "apk"
      }
    },
```

* 5- eas build -p android --profile preview

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

### Como alterar a versao do java

* 1 - Veja se está tudo correto com o seu ambiente

```bash
npx expo-doctor

```

curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk list java

```bash
================================================================================
Available Java Versions for macOS ARM 64bit
================================================================================
 Vendor        | Use | Version      | Dist    | Status     | Identifier
--------------------------------------------------------------------------------
 Corretto      |     | 22           | amzn    |            | 22-amzn
               |     | 21.0.2       | amzn    |            | 21.0.2-amzn
               |     | 21.0.1       | amzn    |            | 21.0.1-amzn
               |     | 17.0.10      | amzn    |            | 17.0.10-amzn
               |     | 17.0.9       | amzn    |            | 17.0.9-amzn
               |     | 11.0.22      | amzn    |            | 11.0.22-amzn
               |     | 11.0.21      | amzn    |            | 11.0.21-amzn
               |     | 8.0.402      | amzn    |            | 8.0.402-amzn
               |     | 8.0.392      | amzn    |            | 8.0.392-amzn
 Gluon         |     | 22.1.0.1.r17 | gln     |            | 22.1.0.1.r17-gln   :
```
sdk install java 11.0.2-open

````
➜ app_mobile_web3 (feature/fix-build) ✗ sdk install java 11.0.2-open


Stop! java 11.0.2-open is not available. Possible causes:
 * 11.0.2-open is an invalid version
 * java binaries are incompatible with your platform
 * java has not been released yet

Tip: see all available versions for your platform:

  $ sdk list java
➜ app_mobile_web3 (feature/fix-build) ✗
```

sdk install java 11.0.22-amzn

```bash
➜ app_mobile_web3 (feature/fix-build) ✗ sdk use java 11.0.22-amzn


Using java version 11.0.22-amzn in this shell.
➜ app_mobile_web3 (feature/fix-build) ✗

➜ app_mobile_web3 (feature/fix-build) ✗ java -version
openjdk version "11.0.22" 2024-01-16 LTS
OpenJDK Runtime Environment Corretto-11.0.22.7.1 (build 11.0.22+7-LTS)
OpenJDK 64-Bit Server VM Corretto-11.0.22.7.1 (build 11.0.22+7-LTS, mixed mode)
➜ app_mobile_web3 (feature/fix-build) ✗
```

```bash
./gradlew clean
```

## Como configurar o android studio

echo 'export ANDROID_HOME=/Users/gosouza/Library/Android/sdk' >> ~/.zshrc
echo 'export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH' >> ~/.zshrc
source ~/.zshrc


## Contribuição

Contribuições são bem-vindas. Para mudanças significativas, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença

Este projeto está sob a licença MIT.
