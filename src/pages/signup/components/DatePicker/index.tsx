import React, { useState } from "react";

export default function DatePicker () {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  const getMonthName = (month: number) => {
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

  const daysInMonth = (month: number, year: number) => {
    if (month === 2) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    }
    const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
    return monthsWith31Days.includes(month) ? 31 : 30;
  };

  const generateOptions = (
    start: number,
    end: number,
    formatter: (value: number) => string
  ) => {
    return Array.from({ length: end - start + 1 }).map((_, index) => {
      const value = start + index;
      return (
        <option key={value} value={value}>
          {formatter(value)}
        </option>
      );
    });
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(Number(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(event.target.value));
  };

  return (
    <div className="grid grid-cols-3 gap-4 mt-5 mb-5">
      <div className="relative">
        <select
          className="block  outline-none px-5 py-3 w-full border rounded-md shadow-sm"
          onChange={handleMonthChange}
        >
          <option value="" disabled selected>
            Mes
          </option>
          {generateOptions(1, 12, getMonthName)}
        </select>
      </div>

      <div className="relative">
        <select className="block outline-none px-5 py-3 w-full border rounded-md shadow-sm">
          <option value="" disabled selected>
            Día
          </option>
          {selectedMonth !== null &&
            generateOptions(
              1,
              daysInMonth(selectedMonth, selectedYear),
              (value) => value.toString().padStart(2, "0")
            )}
        </select>
      </div>

      <div className="relative">
        <select
          className="block outline-none px-5 py-3 w-full border rounded-md shadow-sm"
          onChange={handleYearChange}
          value={selectedYear}
        >
          <option value="" disabled>
            Año
          </option>
          {generateOptions(1998, new Date().getFullYear(), (value) =>
            value.toString()
          )}
        </select>
      </div>
    </div>
  );
}

