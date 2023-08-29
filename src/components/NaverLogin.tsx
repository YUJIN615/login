import { styled } from "styled-components";

const Naver = () => {
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const STATE = 'false';
  const REDIRECT_URI = `${process.env.REACT_APP_API_ENDPOINT}/login/naver`;
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
  console.log(NAVER_AUTH_URL)

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };
  const NaverLoginBtn = styled.button`
    width: 100%;
    height: 44px;
    border-radius: 4px;
    background: url('/naver_login_btn.png') #03c75a no-repeat center / 45%;
    overflow: hidden;
  `

  return (
  <NaverLoginBtn onClick={NaverLogin} className="naver_login">
    <span className="screen_out">네이버 로그인</span>
  </NaverLoginBtn>
  );


};

export default Naver;

