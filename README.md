# STMT React Native 

[English](./README_en.md)

## 소개 💁🏻‍♂️

STMT는 [React Native](https://reactnative.dev/)로 만들어진 크로스 플랫폼 애플리케이션입니다. 애플리케이션에서 주된 태스크 관리와 실행을 담당하고 있습니다.

### 로그인

<img src="./images/01-login.jpeg" width="250px" />

### 메인, 태스크 설정

<img src="./images/02-main.jpeg" width="750px" />

### 대시보드

<img src="./images/06-dashboard.png" width="250px" />

### 소셜 기능

<img src="./images/05-friends.png" width="250px" />

## 기술 스택 🚀

- [x] Typescript
- [x] Redux
- [x] Redux Saga
- [x] React Navigation
- [x] Styled Components
- [ ] Fastlane
- [ ] Sentry

## 설치 가이드 ⚙️

### 앱스토어 & 구글 플레이스토어 📱

현재 준비 중입니다...

### 개발 환경 🧑🏻‍💻

> ❗️ [React Native 개발 환경 구축](https://reactnative.dev/docs/environment-setup)이 필요합니다.

1. 프로젝트를 클론합니다.

```
git clone https://github.com/6-things-must-to-do/app.git
```

2. 인증 과정에 [구글 Firebase 프로젝트가](https://console.firebase.google.com) 필요합니다. Android와 iOS 패키지 이름 모두 `com.stmt` 이어야 합니다. 프로젝트를 만든 다음, `google-services.json`과 `GoogleService-Info.plist`를 다운 받아야 합니다.

- `google-services.json`는 `android/app/` 디렉토리 아래 있어야 합니다.
- `GoogleService-Info.plist`는 `ios/STMT/` 디랙토리 아래 있어야 합니다.

3. 필요한 패키지를 설치합니다.

```
cd app && yarn

# iOS
cs ios && pod install
```

4. 프로젝트를 빌드합니다.
```
yarn android

or

yarn ios
```

## Author

- [Changhoi Kim](https://github.com/changhoi)

## Contributors
- [eunchai512](https://github.com/eunchai512)
- [JungeunK-9999](https://github.com/JungeunK-9999)