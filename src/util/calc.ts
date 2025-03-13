export const getDDay = (todayDate: Date, targetDate: Date): number => {
  const a = todayDate.getTime();
  const b = targetDate.getTime();
  const res = b - a;
  return Math.ceil(res / (1000 * 3600 * 24));
};

export const text2Date = (yearText: string, remainText?: string) => {
  if (!remainText) {
    return new Date(yearText);
  } else {
    return new Date(yearText + '-' + remainText);
  }
};

export const dday2Date = (baseDate: Date, dday: number) => {
  return new Date(baseDate.getTime() + dday * 24 * 60 * 60 * 1000);
};
