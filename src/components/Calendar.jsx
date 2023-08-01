import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { styled } from "styled-components";

function Calendar() {
  const calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: "dayGridMonth",
    buttonText: {
      today: "오늘", // 오늘 버튼 텍스트 변경
      month: "월", // 월 뷰 텍스트 변경
    },
  };
  return (
    <CalendarContainer>
      <FullCalendar {...calendarOptions} />
    </CalendarContainer>
  );
}

export default Calendar;

const CalendarContainer = styled.div`
  width: 400px;
  height: 400px;
`;
