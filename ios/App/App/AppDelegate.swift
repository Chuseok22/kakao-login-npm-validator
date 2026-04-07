import UIKit
import Capacitor
// 카카오 SDK 초기화에 필요. podspec의 KakaoSDKCommon은 KakaoSDKAuth/KakaoSDKUser 전이 의존성으로 포함된다.
import KakaoSDKCommon
// Kakao URL 처리에 필요
import KakaoSDKAuth

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Kakao SDK 초기화 — 실제 앱 키로 교체 필요 (카카오 개발자 콘솔 → 내 애플리케이션 → 앱 키 → 네이티브 앱 키)
        KakaoSDK.initSDK(appKey: "YOUR_NATIVE_APP_KEY")
        return true
    }

    func applicationWillResignActive(_ application: UIApplication) {
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
    }

    func applicationWillEnterForeground(_ application: UIApplication) {
    }

    func applicationDidBecomeActive(_ application: UIApplication) {
    }

    func applicationWillTerminate(_ application: UIApplication) {
    }

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        // 카카오톡 앱 로그인 완료 후 콜백 URL 처리 — README 기준 필수 추가
        if AuthApi.isKakaoTalkLoginUrl(url) {
            return AuthController.handleOpenUrl(url: url)
        }
        return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
    }

    func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
        return ApplicationDelegateProxy.shared.application(application, continue: userActivity, restorationHandler: restorationHandler)
    }

}
