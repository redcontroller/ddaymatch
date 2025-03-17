import { css } from '@emotion/react';
import styled from '@emotion/styled';

// 공통 스타일
const a11yHidden = css`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

export const Main = styled.main`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: skyblue;
`;

export const H1 = styled.h1`
  ${a11yHidden}
`;

export const H2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

export const Form = styled.form``;

export const Section = styled.section``;

export const Figure = styled.figure``;
export const Image = styled.img``;

export const Span = styled.span``;
