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
  width: 390px;
  height: calc(100vh - 58px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 5px rgba(150, 150, 150, 0.2);
`;

const H1 = styled.h1`
  ${a11yHidden}
`;

const H2 = styled.h2`
  font-size: 24px;
  margin: 30px;
  font-weight: bold;
`;

const Form = styled.form`
  width: 100%;
  margin: 60px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 10px 35px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 30px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #808080;
  background-color: white;
  box-shadow: 2px 2px 5px 0.1px rgba(95, 92, 92, 0.5);
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Figure = styled.figure`
  width: 100%;
  height: auto;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 350px;
  height: auto;
`;

const Span = styled.span`
  font-size: 14px;
  margin: 10px 0;
`;

export { Main, H1, H2, Form, StyledInput, ButtonWrapper, StyledButton, Section, Figure, Image, Span };
