import React from 'react';
import { ReactComponent as Logo } from '../../assets/airbnb.svg';
import { FaBars } from 'react-icons/fa';
import { IoPersonCircle } from 'react-icons/io5';
import './header.components.scss';

const Header = () => {
  return (
    <div
      className="header-container"
      // style={{
      //   backgroundImage: `url(${care})`,
      // }}
    >
      {/* <img src={care} /> */}
      <div className="logo-container">
        <Logo className="logo" />
        <div className="logo-text">airbnb</div>
      </div>

      <div className="middle-box">
        <div className="button-container">
          <div className="middle-button">숙소</div>
          <div className="middle-button">체험</div>
          <div className="middle-button">온라인체험</div>
        </div>

        <div className="search-container">
          <div className="search-box">
            <div className="subtitle">위치</div>
            <input type="text" className="search" placeholder="어디로가세요" />
          </div>
          <div className="search-box">
            <div className="subtitle">체크인</div>
            <input type="text" className="search" placeholder="날짜입력" />
          </div>
          <div className="search-box">
            <div className="subtitle">체크아웃</div>
            <input type="text" className="search" placeholder="날짜입력" />
          </div>
          <div className="search-box">
            <div className="subtitle">인원</div>
            <input type="text" className="search" placeholder="게스트추가" />
          </div>
        </div>
      </div>
      <div className="option-container">
        <div>호스트되기</div>
        <button className="button-wrap">
          <FaBars className="button-icons" />
          <IoPersonCircle className="button-icons" />
        </button>
      </div>
    </div>
  );
};

export default Header;
