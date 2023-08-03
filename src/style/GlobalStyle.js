import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  

  * {
    box-sizing: border-box;
  }

  `;

export default GlobalStyle;

// *{
//   margin:0;
//   padding:0;
//   box-sizing:border-box;
// }
// p,a
// {
//  text-decoration:none;
// }
// ol,ul
// {
//   list-style:none;
// }
// body {
//   max-width: 100vw;
// }
// body::-webkit-scrollbar {
//   display: none;
// }