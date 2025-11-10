# SPA 라우팅: 플랫폼별 처리 방식

## 📋 SPA 라우팅 문제

### 문제 상황

```
사용자가 yoursite.com/about 으로 직접 접속
    ↓
서버: "about이라는 파일이 없는데?"
    ↓
404 에러 발생! ❌
```

### 우리가 원하는 동작

```
사용자가 yoursite.com/about 으로 직접 접속
    ↓
서버: index.html을 제공
    ↓
React Router가 /about 경로를 처리 ✅
```

## 🏢 플랫폼별 해결 방법

### 1. Netlify - `_redirects` 파일 사용

Netlify는 **자체 리다이렉트 시스템**을 구축했습니다.

**설정 파일: `public/_redirects`**

```
/* /index.html 200
```

**작동 방식:**

- Netlify 서버가 `_redirects` 파일을 **빌드 시** 읽음
- 모든 요청(`/*`)을 `index.html`로 리다이렉트하지만 **200 상태 코드** 반환
- URL은 변경되지 않고 유지됨

**장점:**

- 명시적이고 강력함
- 여러 복잡한 리다이렉트 규칙 설정 가능
- SPA뿐만 아니라 다양한 용도로 사용 가능

**예시:**

```
# 여러 리다이렉트 규칙 설정 가능
/api/* https://api.example.com/:splat 200
/old-page /new-page 301
/* /index.html 200
```

### 2. Cloudflare Pages - `404.html` 사용

Cloudflare Pages는 **표준 HTTP 동작**을 따릅니다.

**설정 방법:**

```javascript
// webpack.config.js
new HtmlWebpackPlugin({
  template: 'public/index.html',
  filename: 'index.html',
}),
new HtmlWebpackPlugin({
  template: 'public/index.html',
  filename: '404.html',
}),
```

**작동 방식:**

- 요청한 파일이 없으면 자동으로 `404.html`을 제공
- 표준 HTTP 404 핸들링 메커니즘 사용
- 추가 설정 없이 **플랫폼 자체 기능**으로 처리

**왜 `_redirects`를 무시했나요?**

- Cloudflare Pages도 `_redirects`를 지원하지만 **Netlify와 다른 방식**
- `/* /index.html 200` 형식은 무한 루프로 감지됨
- Cloudflare는 이미 `/index.html`을 루트로 인식하고 있기 때문

**Cloudflare의 에러 메시지:**

```
Found invalid redirect lines:
  - #1: /* /index.html 200
    Infinite loop detected in this rule and has been ignored.
```

## 🔄 Cloudflare Pages의 `_redirects` 지원

Cloudflare도 `_redirects`를 지원하지만 **다른 형식**을 사용합니다:

```
# ❌ Netlify 형식 (무한 루프 감지됨)
/* /index.html 200

# ✅ Cloudflare 형식 (하지만 SPA에는 적합하지 않음)
/old-page /new-page 301
/api/* https://api.example.com/:splat 200
```

**Cloudflare의 `_redirects`는:**

- 주로 **URL 리다이렉트**나 **프록시**용
- SPA 라우팅을 위한 것이 아님

## 📊 플랫폼별 비교표

| 플랫폼                  | SPA 라우팅 방법            | 작동 방식            |
| ----------------------- | -------------------------- | -------------------- |
| **Netlify**             | `_redirects` + `200` 코드  | 자체 리다이렉트 엔진 |
| **Cloudflare Pages**    | `404.html` fallback        | 표준 HTTP 404 핸들러 |
| **Vercel**              | `vercel.json` 설정         | 자체 설정 파일       |
| **GitHub Pages**        | `404.html`                 | 표준 HTTP 404 핸들러 |
| **AWS S3 + CloudFront** | CloudFront 리다이렉트 규칙 | CDN 레벨 설정        |

## 💡 왜 Cloudflare는 404.html 방식을 선택했나요?

### 장점

1. **간단함**: 추가 설정 파일 불필요
2. **표준**: 기존 웹 표준을 따름
3. **효율성**: 별도의 리다이렉트 엔진 불필요
4. **호환성**: 다른 정적 호스팅과 동일한 동작

### 철학

```
Netlify의 철학:
"우리가 강력한 리다이렉트 시스템을 제공하겠다"
   ↓
많은 기능, 복잡한 설정 가능

Cloudflare의 철학:
"표준 HTTP 메커니즘을 사용하면 충분하다"
   ↓
간단하고 효율적인 솔루션
```

## 🎯 마이그레이션 가이드

### Netlify → Cloudflare Pages

**기존 Netlify 설정:**

```
public/_redirects 파일:
/* /index.html 200
```

**Cloudflare Pages로 변경:**

```javascript
// webpack.config.js
plugins: [
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    filename: 'index.html',
  }),
  // Cloudflare Pages SPA 지원을 위한 404.html 생성
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    filename: '404.html',
  }),
];
```

**결과:**

```
dist/
├── index.html          ← 메인 페이지
├── 404.html            ← Cloudflare Pages가 자동으로 사용
└── ...
```

### Cloudflare Pages → Netlify

**기존 Cloudflare 설정:**

```
404.html 자동 생성
```

**Netlify로 변경:**

```
public/_redirects 파일 생성:
/* /index.html 200
```

webpack 설정에서 404.html 생성 제거해도 됨 (선택사항)

## 📝 실전 팁

### 1. 로컬 테스트

**Python으로 로컬 서버 실행:**

```bash
cd dist
python3 -m http.server 8080
```

**또는 serve 패키지 사용:**

```bash
npx serve -s dist -p 8080
```

### 2. package.json 스크립트 추가

```json
{
  "scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack --mode=production --node-env=production",
    "preview": "serve -s dist -p 8080",
    "build:preview": "yarn build && yarn preview"
  }
}
```

### 3. 브라우저 개발자 도구로 디버깅

페이지가 빈 화면으로 나올 때:

1. F12로 개발자 도구 열기
2. Console 탭 확인
3. Network 탭에서 404 에러 확인

## 🚀 결론

둘 다 **같은 문제를 해결**하지만 **다른 철학**으로 접근:

```
문제: SPA에서 새로고침/직접 접속 시 404 에러
   ↓
해결 방법 1: Netlify - 강력한 _redirects 시스템
해결 방법 2: Cloudflare - 표준 404.html 핸들러
   ↓
결과: 모두 정상 작동! ✅
```

**선택 가이드:**

- **Netlify 사용 중**: `_redirects` 사용 (이미 잘 작동함)
- **Cloudflare Pages 사용 중**: `404.html` 사용 (간단하고 효율적)
- **플랫폼 변경 예정**: 위 마이그레이션 가이드 참고

---

**참고 자료:**

- [Netlify Redirects Documentation](https://docs.netlify.com/routing/redirects/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [SPA Deployment Best Practices](https://create-react-app.dev/docs/deployment/)
