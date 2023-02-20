import { createGlobalStyle } from "styled-components";
import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    font-family: ${quicksand.style.fontFamily};
    background-color: #F7FBF5;
    /* margin-left: 20px;
    margin-right: 20px; */
  }
`;
