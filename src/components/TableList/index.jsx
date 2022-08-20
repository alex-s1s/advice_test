import React from "react";
import "./index.css";
import SearchSchedule from "../SearchSchedule";
import TableList from "../Table";

function TableComponent() {
  return (
    <>
      <div className="scheduleM">
        <div className="search">
          <SearchSchedule />
        </div>
        <div className="w-100">
          <TableList />
        </div>
      </div>
    </>
  );
}

export default TableComponent;
