import './App.css';
import jsonData from './events.json';
import { getDDay, text2Date, dday2Date } from './util/calc';

function App() {
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

  const getDDayText = (dDay: number) => {
    if (dDay > 0) {
      return 'D-' + dDay.toString();
    } else if (dDay < 0) {
      return 'D+' + (dDay * -1).toString();
    } else {
      return 'D-Day';
    }
  };

  return (
    <>
      Hello! DDay Match
      <form action="">
        <label htmlFor="baseDate">기준일</label>
        <input type="date" id="baseDate" />
        <label htmlFor="birthday">연인 생일</label>
        <input type="date" id="firstDate" />
        <label htmlFor="firstDate">처음 만난 날</label>
        <input type="date" id="firstDate" />
      </form>
      <div>오늘 일시: {date.toLocaleString()}</div>
      <div>처음 만날 날로부터 오늘(2025.3.3): {getDDayText(dFirstDay)}</div>
      <div>화이트 데이(2025.3.14): {getDDayText(dWhiteDay)}</div>
      <div>100일(2025.6.11): {getDDayText(dHundred)}</div>
      <div>33번째 생일(2026.1.2): {getDDayText(dBirthday)}</div>
      <div>크리스마스(2025.12.25): {getDDayText(dChristmas)}</div>
      <div>1주년(2026.3.3): D-{getDDayText(dYear)}</div>
      <div>발렌타인 데이(2025.2.14): {getDDayText(dValentine)}</div>
    </>
  );
}

export default App;
