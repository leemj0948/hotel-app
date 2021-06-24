import React, { useState } from 'react';
import styled from 'styled-components';

const Imgslider = props => {
  const { img } = props;
  const [moveX, setMoveX] = useState(0);
  const slideHandle = number => {
    setMoveX(moveX + number);
  };
  return (
    <Frame>
      {/* 화살표  */}
      <ArrowL
        onClick={() => {
          slideHandle(15);
        }}
      />
      <ArrowR
        onClick={() => {
          slideHandle(-15);
        }}
      />
      <Images style={{ transform: `translateX(${moveX}vw)` }}>
        {Boolean(img.length) &&
          img.map((elm, index) => {
            return <Img src={elm} key={index} />;
          })}
      </Images>
    </Frame>
  );
};

const Frame = styled.div`
  position: relative;
`;
const Images = styled.div`
  display: flex;
  width: auto;
  overflow: hidden;
`;
const Img = styled.img`
  height: 15vw;
`;
const ArrowL = styled.div`
  position: absolute;
  top: 40%;
  width: 30px;
  height: 30px;
  background-color: red;
  z-index: 99;
`;
const ArrowR = styled.div`
  position: absolute;
  top: 40%;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: red;
  z-index: 99;
`;

export default Imgslider;
