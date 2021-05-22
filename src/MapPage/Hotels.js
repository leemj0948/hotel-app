import React, { useEffect } from 'react';
import styled from 'styled-components';
import Fliter from './Component/Filter';

const Hotels = props => {
  return (
    <Backgorund>
      <OptionInfo>
        300개 이상의 숙소 · 6월 1일 - 6월 10일 · 게스트 2명
      </OptionInfo>
      <Title>지도에서 선택한 지역의 숙소</Title>
      <Filters>
        <Fliter name={filterName} />
      </Filters>
      <SmallInfo>
        <Info>
          <Bold>예약을 서두르세요.</Bold>여행하시려는 날짜에는 서울 숙소의 26%가
          이미 예약되었습니다.
        </Info>
      </SmallInfo>
    </Backgorund>
  );
};
const filterName = [
  '유연한 환불 정책',
  '숙소 유형',
  '요금',
  '즉시 예약',
  '필터 추가하기',
];

const Backgorund = styled.div`
  width: 100%;
`;
const OptionInfo = styled.h1`
  color: inherit;
  font-size: 0.9vw;
  font-weight: 400;
  line-height: inherit;
  margin: 0px;
  padding: 0px;
`;
const Title = styled.h1`
  padding: 15px 0;
  color: inherit;
  font-size: 2vw;
  font-weight: bolder;
  line-height: inherit;
  margin: 0px;
`;
const Filters = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', 'center')}
  margin-top: 10px;
  width: 100%;
`;

const SmallInfo = styled.div`
  width: 100%;
  height: 3vw;
  padding: 40px 0;
`;
const Info = styled.span`
  font-size: 1em;
`;
const Bold = styled.span`
  font-weight: bold;
`;

export default Hotels;
