import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="logo-container">{/* 로고 */}</div>
      <div className="button-container">
        <span>숙소</span>
        <span>체험</span>
      </div>
      <div className="option-container">
        <span>호스트되기</span>
        <button>
          <div>햄버거</div>
          <div>사람</div>
        </button>
      </div>
    </div>
  );
};

export default Header;
