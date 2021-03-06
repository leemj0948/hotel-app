// import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
	* {
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 1.3rem;
  }

  input {
    border-style: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: black;
  }
  button {
    border-style: none;
    cursor: pointer;
  }
`;
export default GlobalStyle;
