import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const RedirectNaverLogin = (props:any) => {
  // const navigate = useNavigate();

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    
  })

  const Wrap = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
   height: 100vh;
  `

  return (
    <Wrap><span>로그인 중입니다...</span></Wrap>
  )
}

export default RedirectNaverLogin;