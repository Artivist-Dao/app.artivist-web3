
# APP MOBILE WEB3

Este projeto é uma aplicação móvel desenvolvida com tecnologia Web3 e React Native, oferecendo funcionalidades descentralizadas e avançadas para a criação de experiências de usuário inovadoras em blockchain.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- Node.js
- Yarn (opcional, pode-se usar npm)
- Expo CLI

## Configuração do Ambiente

Para configurar seu ambiente de desenvolvimento, siga estas etapas:

1. Instale o `react-native-gesture-handler`:
   ```
   npm install react-native-gesture-handler
   ```

2. Instale o Expo CLI e as ferramentas necessárias globalmente:
   ```
   npm install -g expo-cli
   npm install -g @expo/ngrok@4.1.0
   npm install -g eas-cli
   ```

3. Limpe o cache do npm:
   ```
   npm cache clean --force
   ```

4. Instale as dependências do projeto:
   ```
   npm install
   ```

5. Inicie o projeto com o Expo:
   ```
   npx expo start --tunnel -c
   ```

## Construção do Aplicativo

Para construir o aplicativo para Android, utilize o comando:
```
eas build --platform android
```

## Solução de Problemas

Em caso de problemas, você pode utilizar os seguintes comandos para diagnóstico e correção de erros:
```
npx expo-doctor
npx expo install --check
npm uninstall @types/react-native
npx expo-doctor
```

## Limpeza do Cache

Se necessário, limpe o cache do projeto executando:

```bash
rm -rf node_modules
npm install # ou use yarn
npm start --reset-cache # ou yarn start --reset-cache
```

## Instalação

Para instalar e executar o projeto, siga estas etapas:

1. Clone o repositório do projeto.
2. Navegue até o diretório do projeto.
3. Instale as dependências conforme descrito anteriormente.
4. Inicie o servidor de desenvolvimento e abra o aplicativo Expo no seu telefone para escanear o código QR.

## Contribuindo

Contribuições são bem-vindas! Para mudanças significativas, abra uma issue primeiro para discutir as alterações desejadas.

## Licença

Este projeto está sob a licença MIT.

## Links Úteis

- [Repositório Oficial](https://github.com/Artivist-Dao/app.artivist-web3)
- [Documentação do Expo](https://docs.expo.dev/guides/authentication/#github)
