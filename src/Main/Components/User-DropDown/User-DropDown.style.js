import styled from 'styled-components';

export const UserDropDwonBox = styled.div`
  position: absolute;
  width: 230px;
  height: 220px;
  font-size: 15px;
  color: gray;
  padding: 10px 20px;
  flex-direction: column;
  background-color: white;
  top: 80px;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Line = styled.hr`
  width: 120%;
  position: relative;
  left: -19px;
`;
export const Text = styled.p`
  padding: 5px 5px 5px 12px;
  height: 35px;
  line-height: 30px;
  transition: box-shadow 0.2s ease;
  posotion: relative;
  align-items: center;
  left: -20px;
  position: relative;
  &:hover {
    background: gainsboro;
    width: 120%;
  }
`;
