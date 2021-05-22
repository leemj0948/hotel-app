import React from 'react';
import styled from 'styled-components';

const HotelInfo = props => {
  return (
    <>
      <Bar />
      <Form>
        <ImgSection></ImgSection>
        <TextSection>
          <AddressInfo>Donggyo-dong,Mapo-gu 의 집 전체 </AddressInfo>
          <Title>Donggyo-dong,Mapo-gu 의 집 전체 </Title>
          <Info1>최대 인원 5명 침실1개 침대 4개 욕실 1개</Info1>
          <Info2>주방 무선인터넷 에어컨 헤어드라이어</Info2>
          <Heart src="" />
          <Price>₩80,871/박</Price>
          <TotalPrice>총액 ₩ 0</TotalPrice>
        </TextSection>
      </Form>
    </>
  );
};

const Form = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexSet('flex-start', 'center')}
`;
const Bar = styled.div`
  width: 100%;
  height: 1px;
  margin: 2vw 0;
  background-color: #d3d3d3;
`;
const ImgSection = styled.span``;
const TextSection = styled.span`
  display: flex;
  flex-direction: column;
`;
const AddressInfo = styled.span`
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  width: 100%;
  color: #c0c0c0;
`;
const Title = styled.span``;
const Info1 = styled.span`
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  width: 100%;
  color: #c0c0c0;
`;
const Info2 = styled.span`
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  width: 100%;
  color: #c0c0c0;
`;
const Heart = styled.img``;
const Price = styled.span``;
const TotalPrice = styled.span`
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  width: 100%;
  color: #c0c0c0;
`;

export default HotelInfo;
