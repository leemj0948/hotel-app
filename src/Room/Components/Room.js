import React from 'react';
import MapList from '../../assets/data/maplist';

import {
  Star,
  Img1,
  Img2,
  Img3,
  Img4,
  Grid,
  MainImg,
  BillBox,
  DetailBox,
  RoomType,
  Content,
  OneDesc,
  Title,
  Descprtion,
  Span,
  AdditionalFee,
  Subtitle,
  Section,
  Button,
  Line,
  Notice,
  StarContainer,
  Price,
  Share,
  Heart,
  Icons,
  Div,
} from './Room.styles.js';

const Room = ({ match, location }) => {
  // const matchId = location.href.charAt(27);
  const matchId = match.params.id;
  console.log(matchId);

  const item = MapList.find(list => {
    return list.id == matchId;
  });
  console.log(item);
  console.log(item.imgUrl[0]);
  let features = item.owner.feature;
  console.log(features);
  return (
    <Content>
      <Title>{item.title}</Title>
      <OneDesc>
        <Div>
          <StarContainer>
            {' '}
            <Star />
          </StarContainer>
          <Span>{item.rating}</Span>
          <Span>{item.address}</Span>
        </Div>
        <div>
          <Share />
          <Icons>공유하기</Icons>
          <Heart />
          <Icons>저장</Icons>
        </div>
      </OneDesc>
      <Grid>
        <MainImg alt="img" src={item.imgUrl[0]} />
        <Img1 alt="img" src={item.imgUrl[1]} />
        <Img2 alt="img" src={item.imgUrl[2]} />
        <Img3 alt="img" src={item.imgUrl[3]} />
        <Img4 alt="img" src={item.imgUrl[0]} />
      </Grid>
      <Descprtion>
        <DetailBox>
          <Section>
            <Subtitle> Host by {item.owner.name}</Subtitle>
            <RoomType>{item.option1}</RoomType>
          </Section>
          <Section>
            <ul>
              {features.map(f => {
                return <li>{f}</li>;
              })}
            </ul>
          </Section>
          <Section>
            <Subtitle>{item.owner.name} 님의 숙소 정보</Subtitle>
            <div>{item.describe}</div>
          </Section>
        </DetailBox>
        <BillBox>
          <Line>
            <Price>₩{item.fee} </Price>/ 박
          </Line>
          <Line>
            <StarContainer>
              <Star />
            </StarContainer>
            <span>{item.rating}</span>
          </Line>

          <Button>예약하기 </Button>
          <Notice>예약 확정 전에는 요금이 청구되지 않습니다</Notice>
          <AdditionalFee>
            <span>₩ {item.fee} x 박</span>
          </AdditionalFee>
          <AdditionalFee>
            <span>청소비</span>
            <span>₩24,000</span>
          </AdditionalFee>
          <AdditionalFee>
            <span>서비스수수료</span>
            <span>₩9,300</span>
          </AdditionalFee>
          <AdditionalFee>
            <span>숙박세와수수료</span>
            <span>₩930</span>
          </AdditionalFee>
        </BillBox>
      </Descprtion>
    </Content>
  );
};

export default Room;
