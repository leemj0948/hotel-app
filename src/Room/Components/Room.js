import React from 'react';

const Room = ({ props }) => {
  const { id, address, fee, imgUrl, option1, option2, title } = props.data;
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <span>{address}</span>
      </div>
      <div>
        <div>
          <img src={imgUrl} />
          <p>Prive room in guesthouse host by __</p>
          <p>1guest . 1bedroom, 2baths</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Room;
