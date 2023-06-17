import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'sofiapro-light';
    src: url('./assets/fonts/sofiapro.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    /* font-family: 'sofiapro', sans-serif; */
  }
`;
