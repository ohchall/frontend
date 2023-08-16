import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarContainer } from "./Calendar.style";
import UpArrow from "../../assets/UpArrow.svg";

function Calendar({ events, onMonthChange }) {
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

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
    eventColor: "#3498db",
    eventClassNames: (event) => {
      return event.event.extendedProps.isComplete ? ["completed"] : [];
    },
    height: "auto",
    datesSet: (info) => {
      const currentMonth = info.start.getMonth() + 1;
      onMonthChange(currentMonth);
    },
  };
  return (
    <CalendarContainer>
      <div className="calendarTitle">
        <h2>오챌 캘린더</h2>
        <img src={UpArrow} onClick={toggleCalendarVisibility} alt="arrow" />
      </div>
      {isCalendarVisible && (
        <div className="calendarStyle">
          <FullCalendar {...calendarOptions} />
        </div>
      )}
    </CalendarContainer>
  );
}

export default Calendar;
