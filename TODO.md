# TODO — @chuseok22/capacitor-kakao-login 검증

## 완료된 작업
- [x] React + Vite + TypeScript + Capacitor 프로젝트 생성
- [x] npm install @chuseok22/capacitor-kakao-login
- [x] TypeScript import 및 타입 검사 통과
- [x] Vite 빌드 성공
- [x] cap add ios / android
- [x] cap sync 성공
- [x] iOS AppDelegate.swift + Info.plist 설정 (README 기준)
- [x] Android MyApplication.kt + AndroidManifest.xml 설정 (README 기준)
- [x] Android Kotlin classpath 추가 후 Gradle 설정 성공
- [x] Android Kakao SDK 의존성 해석 확인
- [x] 보고서 작성: .report/20260407_#1_capacitor_kakao_login_npm_동작_검증.md

## 남은 작업 (환경 필요)
- [ ] iOS: Package.swift 루트 이동 수정 후 SPM 통합 재검증 (Xcode 필요)
- [ ] iOS: Xcode 빌드 검증
- [ ] iOS: 시뮬레이터/실기기 런타임 검증 (앱 키 필요)
- [ ] Android: Android Studio Gradle 빌드 검증 (Android SDK 필요)
- [ ] Android: 에뮬레이터/실기기 런타임 검증 (앱 키 필요)

## 플러그인 수정 필요 사항
1. ios/Package.swift → Package.swift (루트 이동) + capacitor-swift-pm 버전 수정
2. README에 Android Kotlin classpath 추가 단계 명시
3. README에 Capacitor 버전 요구사항 명시
