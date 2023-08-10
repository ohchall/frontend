import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'googleABeeZee';
  }
  @font-face {
	font-family: "BowlByOneSC";
	src: url(./assets/fonts/ABeeZee/Bowlby_One_SC/BowlbyOneSC-Regular.ttf);
}
  `;

export default GlobalStyle;
