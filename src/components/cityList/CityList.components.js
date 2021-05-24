import React, { useEffect, useState } from 'react';
// import LANDMARK_DATA from '../../../public/data/landmark';
import './CityList.style.scss';
const CityList = () => {
  // const { collections } = LANDMARK_DATA;
  const [datas, setDatas] = useState({});
  useEffect(
    fetch('/data/landmark.js', { method: 'GET' })
      .then(res => res.json())
      .then(tas => {
        setDatas(tas);
      }),
    []
  );
  console.log(datas);
  return (
    <div className="landmark-page">
      <h1 className="subtitle">가까운 여행지 둘러보기</h1>
      {/* {collections.map(({ id, city, imgUrl, distance }) => (
        <div className="thumb-Wrap" key={id}>
          <img src={imgUrl} alt="thumb" className="img" />
          <span className="city">{city}</span>
          <span className="distance">차로 {distance} 분 거리</span>
        </div>
      ))} */}
    </div>
  );
};

export default CityList;
