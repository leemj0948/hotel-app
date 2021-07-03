import React from 'react';
import { UserDropDwonBox, Text, Line } from './User-DropDown.style';
const UserDropDown = () => {
  return (
    <UserDropDwonBox>
      <div className="user-item">
        <Text>로그인</Text>
        <Text>회원가입</Text>
        <Line />
        <Text>숙소호스트되기</Text>
        <Text>체험호스팅하기</Text>
        <Text>도움말</Text>
      </div>
    </UserDropDwonBox>
  );
};

export default UserDropDown;
