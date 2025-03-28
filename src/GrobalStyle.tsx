import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

const webFont = css`
  /* 800 (ExtraBold) */
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }

  /* 700 (Bold) */
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  /* 600 (SemiBold) */
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  /* 400 (Regular) */
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  /* 300 (Light) */
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
`;

const globalStyles = css`
  ${emotionReset}
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  ${webFont}

  :root {
    --main-black: #111111;
    --main-gray: #808080;
    --main-lightgray: #f2f2f2;
    --main-green: #0ebd5d;
    --main-red: #fe0000;
  }

  body {
    width: 100vw;
    height: 100vh;
    color: var(--main-black);
    font-family: 'Pretendard';
  }

  button,
  ul,
  li {
    color: var(--main-black);
    font-family: 'Pretendard';
  }
`;

const GlobalStyle = () => <Global styles={globalStyles} />;

export default GlobalStyle;
