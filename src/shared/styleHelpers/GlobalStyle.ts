import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #F6F8F9;
    font-family: AppFont;
  }

  input, button, select, textarea, optgroup, option {
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  @font-face {
    font-family: 'AppFont';
    /* src: url(${"./fonts/Open_Sans/OpenSans-Light.ttf"}); */
    src: url(${"/fonts/Roboto/Roboto-Light.ttf"});
  }

  @font-face {
    font-family: 'AppFontBold';
    src: url(${"/fonts/Roboto/Roboto-Bold.ttf"});
  }
`