import React, { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";
import range from "lodash/range";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import { ko } from "date-fns/esm/locale";

const CrewDate = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const formatDate = (date) => {
   const year = date.getFullYear();
   const month = date.getMonth() + 1; 
   const day = date.getDate();

   return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
 };
 const handleStartDateChange = (date) => {
  const formattedDate = formatDate(date);
  setStartDate(date);
  props.setStartDate(formattedDate);


  const endDateFormatted = formatDate(endDate);
  const range = `${formattedDate} - ${endDateFormatted}`;
  props.setDateRange(range);
   };


   const handleEndDateChange = (date) => {
    const formattedDate = formatDate(date);
    setEndDate(date);
    props.setEndDate(formattedDate);

    
    const startDateFormatted = formatDate(startDate);
    const range = `${startDateFormatted} - ${formattedDate}`;
    props.setDateRange(range);
  };

  const renderCustomHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <div
      style={{
        margin: 10,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {"<"}
      </button>
      <select
        value={getYear(date)}
        onChange={({ target: { value } }) => changeYear(value)}
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        value={months[getMonth(date)]}
        onChange={({ target: { value } }) =>
          changeMonth(months.indexOf(value))
        }
      >
        {months.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {">"}
      </button>
    </div>
  );

  return (
    <div>
    <DatePicker
       locale={ko}
       dateFormat="yyyy-MM-dd"
        selected={startDate}
        onChange={handleStartDateChange}
        renderCustomHeader={renderCustomHeader}
        maxDate={endDate}
      />
       <DatePicker
        locale={ko}
        dateFormat="yyyy-MM-dd"
        selected={endDate}
        onChange={handleEndDateChange}
        renderCustomHeader={renderCustomHeader}
        minDate={startDate}
      />
    </div>
  );
};

export default CrewDate;
