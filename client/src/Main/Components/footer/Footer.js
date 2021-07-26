import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import {
  FooterWrap,
  MainFooter,
  CountrySetting,
  SnSInfo,
  FooterBox,
  Text,
} from './footer.styles';
const Footer = () => {
  return (
    <FooterBox>
      <FooterWrap>
        <MainFooter>
          <Text>© 2021 Carebnb, Inc.</Text>
          <Text>
            개인정보 처리방침·이용약관·사이트맵·한국의 변경된 환불 정책·회사
            세부정보
          </Text>
        </MainFooter>
        <CountrySetting>
          <Text>한국어 (KR) </Text>
          <Text>통화 ₩ KRW</Text>
        </CountrySetting>
        <SnSInfo>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </SnSInfo>
      </FooterWrap>
    </FooterBox>
  );
};

export default Footer;
