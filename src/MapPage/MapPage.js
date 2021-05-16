import React, { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const MapPage = props => {
  useEffect(() => {
    const container = document.getElementById('maps');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <>
      <div id="maps" styled={{ width: '50%', height: '80%' }}></div>
    </>
  );
};

const MapContainer = styled.div`
  width: 500px;
  height: 500px;
`;

export default MapPage;
