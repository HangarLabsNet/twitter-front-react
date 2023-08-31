import { useState } from "react";
import { getMonthName, daysInMonth } from "../../../../utils/datePicker";

export default function DatePicker() {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

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
          {selectedMonth &&
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
