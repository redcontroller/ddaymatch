import { Main, H1, H2, Form, Section, Figure, Image, Span, StyledInput, StyledButton, ButtonWrapper } from './Home.styles';

const Home: React.FC = () => {
  const date = new Date();
  console.log(date);

  return (
    <Main>
      <H1>가까운 기념일을 계산해주는 서비스</H1>
      <Form action="">
        <H2>가까운 기념일을 알아봐요!</H2>
        <StyledInput>
          <label htmlFor="baseDate">기준일</label>
          <input type="date" id="baseDate" />
        </StyledInput>
        <StyledInput>
          <label htmlFor="birthday">연인 생일</label>
          <input type="date" id="firstDate" />
        </StyledInput>
        <StyledInput>
          <label htmlFor="firstDate">처음 만난 날</label>
          <input type="date" id="firstDate" />
        </StyledInput>
        <ButtonWrapper>
          <StyledButton>초기화</StyledButton>
          <StyledButton>기념일 계산</StyledButton>
        </ButtonWrapper>
      </Form>
      <Section>
        <Figure>
          <Image src={'./images/zzal.png'} alt="오늘이 무슨 날인지 알아?" />
        </Figure>
        <Span>센스 있게 기념일을 미리 체크 해볼까요? ✅</Span>
        <Span>계산된 기념을 간편하게 달력에 저장해봐요! 🗓️</Span>
      </Section>
    </Main>
  );
};

export default Home;
