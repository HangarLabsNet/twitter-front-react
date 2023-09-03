export const getMonthName = (month: number) => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return months[month - 1];
};

export const daysInMonth = (month: number, year: number) => {
  if (month === 2) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  }
  const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
  return monthsWith31Days.includes(month) ? 31 : 30;
};
