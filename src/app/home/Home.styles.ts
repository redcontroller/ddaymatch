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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 390px;
  height: 844px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: skyblue;
`;

const H1 = styled.h1`
  ${a11yHidden}
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  /* background-color: orange; */
`;

const Figure = styled.figure``;

const Image = styled.img`
  width: 350px;
`;

const Span = styled.span``;

export { Main, H1, H2, Form, Section, Figure, Image, Span };
