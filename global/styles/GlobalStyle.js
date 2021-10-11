import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// View Ports
export const xlScreen = "1500px";
export const lgScreen = "1024px";
export const mdScreen = "768px";
export const smScreen = "568px";
export const xsScreen = "280px";

// constants
export const headerHeight = "4rem";

// Shadows
const shadowLight = '0px 10px 15px -3px hsla(0, 0%, 0%, 0.06), 0px 4px 6px -2px hsla(0, 0%, 0%, 0.05)';
const shadowDark = '0px 10px 15px -3px hsla(220, 13%, 91%, 0.06), 0px 4px 6px -2px hsla(220, 13%, 91%, 0.05)';

// Typography & index
export const typoTheme = {
  fontWeight: {
    basic: `400`,
    semiBold: `500`,
    bold: `700`
  },
  fontSize: {
    bigFontSize: `4rem`,
    largeFontSize: `3rem`,
    mediumFontSize: `2rem`,
    titleFontSize: `1.8rem`,
    normalFontSize: `1.5rem`,
    linkFontSize: `1.2rem`,
    smallFontSize: `1rem`,
  },
  zIndex: {
    modelZ: "150",
    headerZ: "100",
    scrollLinkZ: "50",
    normalZ: "10"
  }
};

// Colors
export const lightTheme = {
  bodyColor: `hsl(0, 0%, 94%)`,
  textColor: `hsl(236, 8%, 45%)`,
  titleColor: `hsl(0, 0%, 0%)`,
  scrollBarColor: `hsl(240, 12%, 90%)`,
  scrollThumbColor: `hsl(240, 12%, 80%)`,
  shadowColor: shadowLight,
  containerColor: `hsl(240, 70%, 95%)`,
  textGradient: `linear-gradient(to right, hsl(40, 74%, 73%), hsl(331, 63%, 72%), hsl(267, 75%, 66%), hsl(194, 100%, 81%))`,
  buttonColor: `hsl(32, 80%, 74%)`,
  buttonHover: `hsl(32, 80%, 70%)`,
  buttonText: `hsl(0, 20%, 25%)`,
  starsColor: `hsl(40, 74%, 73%)`,
  starsColorAlt: `hsl(331, 63%, 72%)`
};

export const darkTheme = {
  bodyColor: `hsl(242, 97%, 5%)`,
  textColor: `hsl(236, 12%, 75%)`,
  titleColor: `hsl(0, 0%, 90%)`,
  scrollBarColor: `hsl(236, 12%, 48%)`,
  scrollThumbColor: `hsl(236, 12%, 36%)`,
  shadowColor: shadowDark,
  containerColor: `hsl(206, 4%, 10%)`,
  textGradient: `linear-gradient(to bottom, hsl(40, 74%, 73%), hsl(0, 4%, 40%), hsl(240, 12%, 80%), hsl(331, 63%, 72%))`,
  buttonColor: `hsl(236, 45%, 20%)`,
  buttonHover: `hsl(236, 45%, 18%)`,
  buttonText: `#fff`,
  starsColor: `hsl(0, 0%, 94%)`,
  starsColorAlt: `hsl(267, 75%, 66%)`
};

// Main pages layout
export const Main = styled.main`
  margin-top: calc(${headerHeight} * 1.5);
  padding: 0.5rem 0.8rem;

  @media screen and (max-width: ${smScreen}) {
    padding: 0.5rem 0.4rem;
  }
`;

// GlobalStyle
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    background-color: ${({ theme }) => theme.bodyColor};
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3, p, br, a {
    ::selection {
      background: hsl(40, 74%, 73%);
      color: #fff;
    }
  }
`;