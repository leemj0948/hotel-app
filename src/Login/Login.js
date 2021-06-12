import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Form>
      <Background />
      <LoginModal>
        <Header>
          <CloseBtn></CloseBtn>
          <Title>로그인 또는 회원가입</Title>
        </Header>
        <Body>
          <BodyHeader>케어비엔비에 오신 것을 환영합니다.</BodyHeader>
          <PhoneInfo>
            <Country type="select"></Country>
            <Phone type="number" placeholder="전화번호"></Phone>
          </PhoneInfo>
          <Info>
            전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
            데이터 요금이 부과됩니다.
          </Info>
          <Btn>계속</Btn>
          <OR>
            <Line>
              <Text>또는</Text>
            </Line>
          </OR>
          <Btn>페이스북으로 로그인하기</Btn>
          <Btn>구글로 로그인하기</Btn>
          <Btn>Apple계정으로 로그인하기</Btn>
          <Btn>이메일로 로그인하기</Btn>
        </Body>
      </LoginModal>
    </Form>
  );
};
const Form = styled.div`
  width: 100%;
  height: 80vw;
`;
const Background = styled.div`
  position: relative;
<<<<<<< HEAD
=======
  height: 100vw;
>>>>>>> b959fa0... add:login 수정중
  width: 100%;
  height: 100%;
  background-color: #484848;
`;
const LoginModal = styled.div`
  position: absolute;
  top: 20vw;
  left: 50vw;
  width: 40%;
  height: 80%;
<<<<<<< HEAD
  border-radius: 3%;
  background-color: white;
  opacity: 35%;
=======
  left: 45%;
  top: 50%;
  background-color: white;
  border-radius: 1.5vw;
>>>>>>> b959fa0... add:login 수정중
`;
const Header = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  height: 8%;
=======
  height: 3vw;
>>>>>>> b959fa0... add:login 수정중
`;
const CloseBtn = styled.div`
  position: absolute;
  left: 1vw;
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 3vw;
  height: 92%;
`;
const BodyHeader = styled.div`
  font-size: 2vw;
`;
const Title = styled.h1``;
const PhoneInfo = styled.div``;
const Country = styled.input``;
const Phone = styled.input``;
const Info = styled.p``;
const Btn = styled.div``;
const OR = styled.div``;
const Line = styled.div``;
const Text = styled.span``;

export default Login;
