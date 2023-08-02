import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { styled } from "styled-components";

function Calendar({ events }) {
  const calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: "dayGridMonth",
    buttonText: {
      today: "오늘",
      month: "월",
    },
    events,
  };
  return (
    <CalendarContainer>
      <FullCalendar {...calendarOptions} />
    </CalendarContainer>
  );
}

export default Calendar;

const CalendarContainer = styled.div``;
