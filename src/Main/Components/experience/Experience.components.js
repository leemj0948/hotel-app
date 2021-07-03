import React from 'react';
import {
  ExperienceContainer,
  ExperienceSubtitle,
  ThumbWrap,
  Img,
  Subtitle,
  Text,
  ThumbBox,
} from './Experience.style';

const Experience = () => {
  return (
    <ExperienceContainer>
      <ExperienceSubtitle>체험 둘러보기</ExperienceSubtitle>
      <ExperienceSubtitle size="25px">
        현지 전문가와 함께하는 독특한 액티비티에 오프라인이나 온라인으로 참여해
        보세요.
      </ExperienceSubtitle>
      <ThumbBox>
        <ThumbWrap>
          <Img src="https://i.ibb.co/TRCknfn/alley-2995354-640.jpg" alt="img" />
          <Subtitle>추천 컬렉션: 여행 본능을 깨우는 체험</Subtitle>
          <Text>온라인 체험으로 집에서 랜선 여행을 즐기세요.</Text>
        </ThumbWrap>
        <ThumbWrap>
          <Img src="https://i.ibb.co/RjY84b8/house-1477041-640.jpg" alt="img" />
          <Subtitle>온라인 체험</Subtitle>
          <Text>호스트와 실시간으로 소통하면서 액티비티를 즐겨보세요.</Text>
        </ThumbWrap>
        <ThumbWrap>
          <Img src="https://i.ibb.co/Y37rvHg/lake-192990-640.jpg" alt="img" />
          <Subtitle>체험</Subtitle>
          <Text>어디에서든 세계 각지의 매력을 만나실 수 있습니다.</Text>
        </ThumbWrap>
      </ThumbBox>
    </ExperienceContainer>
  );
};

export default Experience;
