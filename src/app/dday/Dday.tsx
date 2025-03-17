import jsonData from '../../events.json';
import { getDDay, text2Date, dday2Date, getDDayText } from '../../util/calc';

const Main: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  const eventsData = jsonData;

  // User input value
  const firstDay = new Date('2025-3-3');
  const birthday = new Date('1993-01-02');

  const hundredDay = dday2Date(firstDay, 100);
  const nextBirthday = new Date(birthday);
  const nextFirstDay = new Date(firstDay);
  nextBirthday.setFullYear(new Date().getFullYear() + 1);
  nextFirstDay.setFullYear(new Date().getFullYear() + 1);

  // special day
  const dFirstDay = getDDay(date, firstDay);
  const dBirthday = getDDay(date, nextBirthday);
  const dYear = getDDay(date, nextFirstDay);
  const dHundred = getDDay(date, hundredDay);

  // event day
  const dValentine = getDDay(date, text2Date(year, eventsData.valentine.date));
  const dWhiteDay = getDDay(date, text2Date(year, eventsData.white.date));
  const dChristmas = getDDay(date, text2Date(year, eventsData.christmas.date));

  return (
    <main>
      <h1>Hello! DDay Match</h1>
      <form action="">
        <h2>날짜 계산</h2>
        <label htmlFor="baseDate">기준일</label>
        <input type="date" id="baseDate" />
        <label htmlFor="birthday">연인 생일</label>
        <input type="date" id="firstDate" />
        <label htmlFor="firstDate">처음 만난 날</label>
        <input type="date" id="firstDate" />
      </form>
      <section>
        <h2>기념일 목록</h2>
        <div>오늘 일시: {date.toLocaleString()}</div>
        <div>처음 만날 날로부터 오늘(2025.3.3): {getDDayText(dFirstDay)}</div>
        <div>화이트 데이(2025.3.14): {getDDayText(dWhiteDay)}</div>
        <div>100일(2025.6.11): {getDDayText(dHundred)}</div>
        <div>33번째 생일(2026.1.2): {getDDayText(dBirthday)}</div>
        <div>크리스마스(2025.12.25): {getDDayText(dChristmas)}</div>
        <div>1주년(2026.3.3): {getDDayText(dYear)}</div>
        <div>발렌타인 데이(2025.2.14): {getDDayText(dValentine)}</div>
      </section>
    </main>
  );
};

export default Main;
