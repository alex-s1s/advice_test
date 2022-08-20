import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";

function CalendarComponent(props) {
  return (
    <div>
      <Calendar onChange={props.onChange} value={props.value} />
    </div>
  );
}

export default CalendarComponent;
