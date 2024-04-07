# Configuration and Execution Guide for WEB3 MOBILE APP on MAC

This guide is intended to assist beginners in configuring and running the WEB3 MOBILE APP project in a Mac environment, detailing each necessary step for an effective setup.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Environment Configuration](#environment-configuration)
- [App Execution](#app-execution)
- [APK Generation](#apk-generation)
- [Common Issues and Solutions](#common-issues-and-solutions)
- [Changing Java Version](#changing-java-version)
- [Android Studio Configuration](#android-studio-configuration)
- [Contribution](#contribution)
- [License](#license)

## Prerequisites
Make sure you have installed:
- Node.js
- Yarn (optional, npm is also supported)
- Expo CLI

## Environment Configuration
1. **Install React Native Dependencies:**
   ```bash
   rm -rf node_modules
   npm install -g react-native-cli
   npm install -g react-native
   npm install
   ```

   ```bash
   ./gradlew wrapper --gradle-version=8.7 --distribution-type=all
   ```

2. **Install Expo CLI and Related Tools:**
   ```bash
   npm install -g expo-cli
   npm install -g @expo/ngrok@4.1.0
   npm install -g eas-cli
   ```

3. **Clear npm and Gradle Cache:**
   ```bash
   npm start -- --reset-cache
   cd android
   ./gradlew clean
   npm cache clean --force
   ./gradlew --stop
   rm -rf $HOME/.gradle/caches/
   ```

## App Execution
- **Start the Project with Expo:**
  ```bash
  npx expo start --tunnel -c
  ```
- **Run Locally for Android:**
  ```bash
  npx eas build --local -p android
  ```

## Doctor Command Usage

In case of issues with the APP configuration, execute the ./doctor command. This command runs a series of checks and automated actions to identify and fix common problems, such as environment settings, Gradle versions compatibility with Java, among others. The ./doctor command performs the following actions:

Checks Android environment configuration (ANDROID_HOME).
Runs Gradle commands to clean, compile, and test the project.
Checks Expo and Expo Ngrok installation and configuration.
Doctor Script:

```bash
./doctor
```

## APK Generation
Follow the steps below to generate an APK:
1. Install eas-cli:
   ```bash
   npm install -g eas-cli
   eas login
   eas build:configure
   ```
2. Configure `eas.json`:
   ```json
   "preview": {
      "android": {
        "buildType": "apk"
      }
   },
   ```
3. Start the build:
   ```bash
   eas build -p android --profile preview
   ```

## Common Issues and Solutions
- **Punycode DeprecationWarning:**
  - Solution: Replace the usage of `punycode` or update dependent packages.
- **Gradle and Java Version Incompatibility:**
  - Solution: Check and synchronize Java and Gradle versions.
- **Issues Initializing Gradle:**
  - Solution: Execute `gradle init` and configure the Gradle project.
- **Expo Troubles:**
  - Solution: Check Expo CLI configuration and network connectivity.

## Changing Java Version
To change the Java version, follow the steps below:
1. Verify the environment with:
   ```bash
   npx expo-doctor
   ```
2. Install and select the desired Java version:
   ```bash
   sdk install java 11.0.22-amzn
   sdk use java 11.0.22-amzn
   ```

## Android Studio Configuration
Configure Android Studio with the following commands:
```bash
echo 'export ANDROID_HOME=/Users/<username>/Library/Android/sdk' >> ~/.zshrc
echo 'export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH' >> ~/.zshrc
source ~/.zshrc
```

## Contribution
Contributions are always welcome. For significant changes, open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.