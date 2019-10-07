import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
    background-color: #f0f0f0;
  color: #999999;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
  margin-top:56px;
  text-rendering: optimizeLegibility;
}
a {
  color: #413b38;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
}

img {
  max-width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: middle;
}
`;
