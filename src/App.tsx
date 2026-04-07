import { Capacitor } from '@capacitor/core';
import { KakaoLogin } from '@chuseok22/capacitor-kakao-login';
import { useState } from 'react';

export default function App() {
  const [socialId, setSocialId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // 현재 실행 플랫폼 (web | ios | android)
  const platform = Capacitor.getPlatform();

  const handleLogin = async () => {
    setSocialId(null);
    setError(null);
    setLoading(true);

    try {
      const result = await KakaoLogin.login();
      setSocialId(result.socialId);
    } catch (e: unknown) {
      // 에러 메시지를 있는 그대로 표시 — 추측 없이 실제 에러만 노출
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError(String(e));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '480px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
        @chuseok22/capacitor-kakao-login 검증
      </h1>

      {/* 현재 플랫폼 표시 */}
      <p style={{ marginBottom: '0.5rem' }}>
        현재 플랫폼: <strong>{platform}</strong>
      </p>

      {/* web 플랫폼 경고 배너 */}
      {platform === 'web' && (
        <div
          style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '4px',
            padding: '0.75rem',
            marginBottom: '1rem',
            color: '#856404',
          }}
        >
          ⚠️ Web 미지원 — 네이티브 앱(iOS/Android)에서 실행하세요.
          <br />
          버튼을 누르면 플러그인이 던지는 실제 에러를 확인할 수 있습니다.
        </div>
      )}

      {/* 카카오 로그인 테스트 버튼 */}
      <button
        onClick={handleLogin}
        disabled={loading}
        style={{
          backgroundColor: '#FEE500',
          color: '#000',
          border: 'none',
          borderRadius: '4px',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? '처리 중...' : '카카오 로그인 테스트'}
      </button>

      {/* 성공 결과 */}
      {socialId !== null && (
        <div
          style={{
            marginTop: '1rem',
            backgroundColor: '#d4edda',
            border: '1px solid #28a745',
            borderRadius: '4px',
            padding: '0.75rem',
            color: '#155724',
          }}
        >
          ✅ 로그인 성공
          <br />
          socialId: <code>{socialId}</code>
        </div>
      )}

      {/* 에러 결과 */}
      {error !== null && (
        <div
          style={{
            marginTop: '1rem',
            backgroundColor: '#f8d7da',
            border: '1px solid #dc3545',
            borderRadius: '4px',
            padding: '0.75rem',
            color: '#721c24',
            wordBreak: 'break-word',
          }}
        >
          ❌ 에러 발생
          <br />
          <code>{error}</code>
        </div>
      )}
    </div>
  );
}
