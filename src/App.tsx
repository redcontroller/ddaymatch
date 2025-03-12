import './App.css';

function App() {
  const today = new Date();

  const cntToday = Math.ceil((today.getTime() - new Date('2025-3-3').getTime()) / (1000 * 3600 * 24));
  const balday = Math.ceil((today.getTime() - new Date('2025-2-14').getTime()) / (1000 * 3600 * 24));

  const whiteday = Math.ceil((new Date('2025-3-14').getTime() - today.getTime()) / (1000 * 3600 * 24));
  const hundredDay = Math.ceil((new Date('2025-6-11').getTime() - today.getTime()) / (1000 * 3600 * 24));
  const loveBirthday = Math.ceil((new Date('2026-1-2').getTime() - today.getTime()) / (1000 * 3600 * 24));
  const xmas = Math.ceil((new Date('2025-12-25').getTime() - today.getTime()) / (1000 * 3600 * 24));
  const yearDay = Math.ceil((new Date('2026.3.3').getTime() - today.getTime()) / (1000 * 3600 * 24));

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
      <div>오늘 일시: {today.toLocaleString()}</div>
      <div>처음 만날 날로부터 오늘(2025.3.3): D+{cntToday}</div>
      <div>화이트 데이(2025.3.14): D-{whiteday}</div>
      <div>100일(2025.6.11): D-{hundredDay}</div>
      <div>33번째 생일(2026.1.2): D-{loveBirthday}</div>
      <div>크리스마스(2025.12.25): D-{xmas}</div>
      <div>1주년(2026.3.3): D-{yearDay}</div>
      <div>발렌타인 데이(2025.2.14): D-{balday}</div>
    </>
  );
}

export default App;
