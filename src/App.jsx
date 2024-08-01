import './App.css'

// velog 에서 사용하는 방식을 모방했슴다
function App() {

  // Flow 1
  // 처음 요청시에 백엔드 서버로 현재 경로(ex. http://localhost:3000/profile/me) 를
  // `next` 라는 쿼리 파라미터에 포함하여 백엔드 서버로 전송합니다.
  const currentPath = window.location.pathname;
  const OAUTH_URL = `http://localhost:8080/oauth2/authorization/kakao?next=${currentPath}`;

  // Flow 2
  // 백엔드 서버에서는 refresh 토큰을 발급하여 쿠키에 저장하고 `next` 에 포함된 리다이렉션 시켜줍니다.
  //
  // (velog 의 경우 access, refresh 모두 쿠키에 저장)
  // -> 우리 서버는 refresh 토큰은 쿠키, access 토큰은 클라이언트 메모리 상에 저장할 예정

  // 즉, 요약하자면 카카오 oauth 로그인시 쿠키에 refresh 토큰만 저장된 상태로 클라이언트(리액트) 로 돌아옵니다.
  // 따라서, axios 인스턴스를 통해서 특정 api 요청시 401 요류가 뜬다면 `reissue` 엔드포인트로 요청을 보내서
  // access token 을 재발급 받는 로직을 사용할 수 있슴다.

  return (
    <>
      <h1>실험용</h1>
      <a href={OAUTH_URL}>까까오 로그인</a>
    </>
  )
}

export default App
