import React from 'react';
import styled from 'styled-components';
import {
  IoCloseOutline,
  IoLogoFacebook,
  IoLogoApple,
  IoLogoGoogle,
  IoMailOutline,
} from 'react-icons/io5';

const Login = () => {
  return (
    <Form>
      <Background />
      <LoginModal>
        <Header>
          <CloseBtn>
            <IoCloseOutline style={{ fontSize: '2.5vw' }} />
          </CloseBtn>
          <Title>로그인 또는 회원가입</Title>
        </Header>
        <Body>
          <BodyHeader>케어비엔비에 오신 것을 환영합니다.</BodyHeader>
          <PhoneInfo>
            <CountryPack>
              국가/지역
              <Country>
                <option value="korea" selected>
                  한국 (+82)
                </option>
                <option>프랑스 (+33)</option>
                <option>중국 (+86)</option>
                <option>스페인 (+34)</option>
              </Country>
            </CountryPack>
            <PhonePack>
              <Placeholder>
                <p>전화번호</p>
              </Placeholder>
              <InputNumber>
                <FirstNumber></FirstNumber>
                <Phone type="number" placeholder="전화번호"></Phone>
              </InputNumber>
            </PhonePack>
          </PhoneInfo>
          <Info>
            전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
            데이터 요금이 부과됩니다.
          </Info>
          <Btn
            margin="1vw 0"
            color="white"
            backColor="rgb(208, 52, 97)"
            border="none"
          >
            계속
          </Btn>
          <OR>
            <Line />
            <Text>또는</Text>
            <Line />
          </OR>
          <Btn>
            <Logo>
              <IoLogoFacebook style={{ color: 'blue' }} />
            </Logo>
            페이스북으로 로그인하기
          </Btn>
          <Btn>
            <Logo>
              <IoLogoGoogle />
            </Logo>
            구글로 로그인하기
          </Btn>
          <Btn>
            <Logo>
              <IoLogoApple />
            </Logo>
            Apple계정으로 로그인하기
          </Btn>
          <Btn>
            <Logo>
              <IoMailOutline />
            </Logo>
            이메일로 로그인하기
          </Btn>
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
  width: 100%;
  height: 100%;
  background-color: #484848;
`;
const LoginModal = styled.div`
  position: absolute;
  width: 50%;
  height: 80%;
  left: 35%;
  top: 35%;
  z-index: 2000;
  background-color: white;
  border-radius: 1.5vw;
`;
const Header = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  height: 8vw;
  border-bottom: 0.1px solid #484848;
`;
const CloseBtn = styled.div`
  position: absolute;
  left: 2vw;
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 1vw 3vw;
`;
const BodyHeader = styled.div`
  margin-top: 1vw;
  font-size: 2vw;
`;
const Title = styled.h1``;
const PhoneInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vw;
  width: 100%;
`;
const CountryPack = styled.div`
  padding: 0.5vw;
  width: 100%;
  border: 1px solid black;
  font-size: 0.2vw;
  color: #484848;
`;
const Country = styled.select`
  width: 100%;
  border: none;
  font-size: 1vw;
  padding-top: 0.5vw;
`;
const PhonePack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3vw;
  border: 1px solid black;
`;
const Placeholder = styled.div`
  position: relative;
  height: 100%;
  p {
    position: absolute;
    left: 1vw;
    top: 1vw;
    color: #484848;
  }
`;
const InputNumber = styled.div`
  display: flex;
`;
const FirstNumber = styled.span`
  width: 20%;
`;
const Phone = styled.input`
  width: 80%;
`;
const Info = styled.p`
  margin: 0.9vw 0;
  font-size: 0.8vw;
  color: #484848;
`;
const Btn = styled.div`
  margin: ${props => props.margin || '1vw 0'};
  padding: 1vw 0;
  position: relative;
  width: 100%;
  height: 4vw;
  color: ${props => props.color || ''};
  border: ${props => props.border || '1px solid gray'};
  border-radius: 1vw;
  background-color: ${props => props.backColor || ''};
  text-align: center;
`;
const OR = styled.div`
  margin: 1vw 0;
  display: flex;
  width: 100%;
`;
const Line = styled.span`
  margin-top: 0.5vw;
  width: 43%;
  height: 1px;
  background-color: gray;
`;
const Text = styled.span`
  width: 15%;
  text-align: center;
  font-size: 1.3vw;
  color: gray;
`;
const Logo = styled.span`
  position: absolute;
  left: 2vw;
`;

export default Login;
