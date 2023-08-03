import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { styled } from "styled-components";

function Calendar({ events, onMonthChange }) {
  const calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: "dayGridMonth",
    buttonText: {
      today: "오늘",
      month: "월",
    },
    events,

    height: "500px",
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

const CalendarContainer = styled.div`
  margin-top: 50px;
  width: 400px;

  .fc .fc-scrollgrid {
    border: none;
  }
  .fc-theme-standard td,
  .fc-theme-standard th {
    border: none;
  }

  .fc-daygrid-day-frame {
    /* background-color: #9999; */
    border: 1px solid #9999;
    border-radius: 10%;
  }

  .fc-col-header-cell {
    background-color: #9999;
    border-radius: 15px;
    color: #333;
  }

  .fc .fc-button-primary {
    border-radius: 15px;
  }
  .fc-toolbar-title {
    background-color: #2c3e50;
    border-radius: 15px;
    color: white;
    border: 5px solid #2c3e50;
  }
  .fc-event {
    background-color: #2c3e50;
    border: none;
  }
`;
