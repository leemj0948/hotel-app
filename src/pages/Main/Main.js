import React from 'react';
import TopBanner from '../../components/topbanner/top-banner.components';
import CityList from '../../components/cityList/CityList.components';
import LiveAnyWhere from '../../components/liveAnywhere/live-anyWhere.components';
import './Main.scss';
import BannerBox from '../../components/banner/banner-box.components';
const Main = () => {
  return (
    <div className="main-container">
      <TopBanner />
      <CityList />
      <LiveAnyWhere />
      <BannerBox
        imgUrl={'https://i.ibb.co/S3Xr1nt/hamburg-111970-1280.jpg'}
        desc={'에어비앤비가 엄선한 위시리스트'}
        subtitle={'슬기로운 자연생활'}
      />
      <BannerBox
        imgUrl={'https://i.ibb.co/0yBMtd9/man-1718099-1280.jpg'}
        desc={'숙소를 공유하여 부수입을 올리고 새로운 가능성을 만나세요.'}
        subtitle={'호스트가 되어보세요'}
      />
    </div>
  );
};

export default Main;
