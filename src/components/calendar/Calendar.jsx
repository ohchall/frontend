import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarContainer } from "./Calendar.style";

function Calendar({ events, onMonthChange }) {
  const calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: "dayGridMonth",
    locale: "koLocale",
    buttonText: {
      today: "오늘",
      month: "월",
    },
    dayCellContent: (args) => args.dayNumberText.replace("일", ""),
    headerToolbar: {
      center: "today",
      right: "prev,next",
    },
    titleFormat: (date) => {
      const year = date.date.year;
      const month = String(date.date.month + 1).padStart(2, "0");
      return `${year}.${month}`;
    },
    events,
    height: "auto",
    datesSet: (info) => {
      const currentMonth = info.start.getMonth() + 1;
      onMonthChange(currentMonth);
    },
  };
  return (
    <CalendarContainer>
      <FullCalendar {...calendarOptions} />
    </CalendarContainer>
  );
}

export default Calendar;
