import React, { useState } from "react";
import CalendarComponent from "../../components/Calendar";
import ListDoctor from "../../components/ListDoctors/index";
import ListQueries from "../../components/ListQueries";
import useQueries from "../../hooks/queries/queries";
import "./index.css";
import { MdAddCircleOutline } from "react-icons/md";
import ModalComponent from "../../components/Modal";

function Queries() {
  const { onChange, dateCalendar } = useQueries();

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className="queries">
      <div class="card-doctor d-flex bg-light">
        <div class="tables-card p-2 w-50 bg-light">
          <ListDoctor />
          <CalendarComponent onChange={onChange} />
        </div>
        <div class="card-queries p-2 w-50">
          <div className="d-flex align-items-end justify-content-end">
            <button
              className="btn btn-primary d-flex align-items-center justify-content-between"
              onClick={toggle}
            >
              <span className="m-2">Adicionar consulta</span>
              <MdAddCircleOutline />
            </button>
          </div>
          <ListQueries value={dateCalendar} />
        </div>
      </div>
      <ModalComponent toggle={toggle} show={modal} />
    </div>
  );
}

export default Queries;
