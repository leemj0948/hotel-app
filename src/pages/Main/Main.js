import React from 'react';
import Banner from '../../components/banner/Banner.components';
import CityList from '../../components/cityList/CityList.components';
import './Main.scss';
const Main = () => {
  return (
    <div className="main-container">
      <Banner />
      <CityList />
    </div>
  );
};

export default Main;
