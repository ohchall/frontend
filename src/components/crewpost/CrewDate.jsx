import React, { useRef, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";
import range from "lodash/range";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import { ko } from "date-fns/esm/locale";
import { styled } from "styled-components";
import CustomInput from "./CustomInput";

const CrewDate = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const customInputRef = useRef(null); 
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
 }

  

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
    <CrewDates>
     <DatePicker
      locale={ko}
      dateFormat="yyyy-MM-dd"
      selected={startDate}
      onChange={handleStartDateChange}
      renderCustomHeader={renderCustomHeader}
      customInput={<CustomInput ref={customInputRef} />}
    />
    </CrewDates>
  );
};
export default CrewDate;
const CrewDates = styled.div`
span{margin:0 10px;}
.react-datepicker-wrapper{width:45%;}`

