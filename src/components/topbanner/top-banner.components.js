import React from 'react';
import care from '../../assets/carebnb_bg.jpg';
import './top-banner.components.scss';
const TopBanner = () => {
  return (
    <div className="banner-container ">
      <div
        className="img-contanier"
        style={{ backgroundImage: `url(${care})`, backgroundSize: 'cover' }}
      />
      {/* <img className="img" src={care} alt="banner-img" /> */}
      <div className="content-wrap">
        <h1>슬기로운 자연생활</h1>
        <p>에어비앤비가 엄선한 위시리스트를 만나보세요.</p>
      </div>
    </div>
  );
};

export default TopBanner;
