import React from 'react';
import {
  LiveContainer,
  AnywhereSubtitle,
  ThumbBox,
  ThumbWrap,
  Img,
  Text,
} from './live-AnyWhere.styles';

const LiveAnyWhere = () => {
  return (
    <LiveContainer>
      <AnywhereSubtitle>어디에서나, 여행은 살아보는 거야!</AnywhereSubtitle>
      <ThumbBox>
        <ThumbWrap>
          <Img src="https://i.ibb.co/TRCknfn/alley-2995354-640.jpg" alt="img" />
          <Text>자연생활을 만낄할수 있는 숙소</Text>
        </ThumbWrap>
        <ThumbWrap>
          <Img src="https://i.ibb.co/RjY84b8/house-1477041-640.jpg" alt="img" />
          <Text>독특한 공간</Text>
        </ThumbWrap>
        <ThumbWrap>
          <Img src="https://i.ibb.co/Y37rvHg/lake-192990-640.jpg" alt="img" />
          <Text>집 전체</Text>
        </ThumbWrap>
        <ThumbWrap>
          <Img src="https://i.ibb.co/nmmHz5k/cat-252048-640.jpg" alt="img" />
          <Text>반려동물 동반 가능</Text>
        </ThumbWrap>
      </ThumbBox>
    </LiveContainer>
  );
};

export default LiveAnyWhere;
