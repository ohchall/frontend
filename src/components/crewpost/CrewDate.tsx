import React, { useRef, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { ReactDatePickerProps } from "react-datepicker";

import range from "lodash/range";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import CustomInput from "./CustomInput";

type CustomHeader = {
  date: Date;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

interface CrewDateProps {
  setStartDate: (date: Date) => void;
}

const CrewDate: React.FC<CrewDateProps> = (props) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const customInputRef = useRef(null);
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
  };

  const handleStartDateChange: ReactDatePickerProps["onChange"] = (date: Date) => {
    setStartDate(date);
    props.setStartDate(date); 
  }
  

  const renderCustomHeader = (props: CustomHeader) => {
    const {
      date,
      changeYear,
      changeMonth,
      decreaseMonth,
      increaseMonth,
      prevMonthButtonDisabled,
      nextMonthButtonDisabled
    } = props;

    return (
      <div style={{ margin: 10, display: "flex", justifyContent: "center" }}>
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>{"<"}</button>
        <select
          value={getYear(date)}
          onChange={({ target: { value } }) => changeYear(Number(value))} 
        >
          {years.map((option: number) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          value={months[getMonth(date)]}
          onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
        >
          {months.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>{">"}</button>
      </div>
    );
  };

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
  span {
    margin: 0 10px;
  }
  .react-datepicker-wrapper {
    width: 45%;
  }
`;
