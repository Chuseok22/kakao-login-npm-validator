package com.example.kakaonpmvalidator

import android.app.Application
import com.kakao.sdk.common.KakaoSdk

// 카카오 SDK는 Application 서브클래스의 onCreate에서 초기화해야 한다.
// README 기준 필수 구현.
class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        // 실제 네이티브 앱 키로 교체 필요 (카카오 개발자 콘솔 → 내 애플리케이션 → 앱 키 → 네이티브 앱 키)
        KakaoSdk.init(this, "YOUR_NATIVE_APP_KEY")
    }
}
