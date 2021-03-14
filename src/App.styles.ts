import styled, {createGlobalStyle} from 'styled-components';
import bgImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body{
    background-image: url(${bgImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justufy-content: center;
  }

  *{
    box-sizing: border-box;
    font-family: "Catamaran", sans-serif;
  }
`;