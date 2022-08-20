import React from "react";
import CalendarComponent from "../../components/Calendar";
import ListDoctor from "../../components/ListDoctors/index";
import ListQueries from "../../components/ListQueries";
import useQueries from "../../hooks/queries/queries";
import useDataQuerie from "../../locales/dataQueries";
import "./index.css";

function Queries() {
  const { onChange, dateCalendar } = useQueries();
  const { Time } = useDataQuerie();

  return (
    <div className="queries">
      <div class="card-doctor d-flex bg-light">
        <div class="tables-card p-2 w-50 bg-light">
          <ListDoctor />
          <CalendarComponent onChange={onChange} />
        </div>
        <div class="card-queries p-2 w-50">
          <ListQueries value={dateCalendar} time={Time} />
        </div>
      </div>
    </div>
  );
}

export default Queries;
