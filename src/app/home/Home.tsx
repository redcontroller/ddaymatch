import { Main, H1, H2, Form, Section, Figure, Image, Span } from './Home.styles';

const Home: React.FC = () => {
  const date = new Date();
  console.log(date);

  return (
    <Main>
      <H1>가까운 기념일을 계산해주는 서비스</H1>
      <Form action="">
        <H2>가까운 기념일을 알아봐요!</H2>
        <div>
          <label htmlFor="baseDate">기준일</label>
          <input type="date" id="baseDate" />
        </div>
        <div>
          <label htmlFor="birthday">연인 생일</label>
          <input type="date" id="firstDate" />
        </div>
        <div>
          <label htmlFor="firstDate">처음 만난 날</label>
          <input type="date" id="firstDate" />
        </div>
      </Form>
      <Section>
        <Figure>
          <Image src={'./images/zzal.png'} alt="오늘이 무슨 날인지 알아?" />
        </Figure>
        <Span>센스 있게 기념일을 미리 체크 해볼까요? ✅</Span>
        <Span>기념일을 계산하고 달력에 저장해보아요! 🗓️</Span>
      </Section>
    </Main>
  );
};

export default Home;
