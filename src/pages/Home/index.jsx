import React from "react";
import CalendarComponent from "../../components/Calendar";
import Carousel from "../../components/carousel";
import ListQueries from "../../components/ListQueries";
import useQueries from "../../hooks/queries/queries";
import useDataQuerie from "../../locales/dataQueries";
import "./index.css";

function Home() {
  const { onChange, dateCalendar } = useQueries();
  const { Time } = useDataQuerie();

  return (
    <div className="home bg-light">
      <div class="card-doctor d-flex">
        <div class="tables-card p-2 w-50 ">
          <Carousel />
          <h2>Description</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam itaque
            corrupti maiores cupiditate officia qui saepe nisi earum. Minus
            autem libero nobis beatae! Sunt est odit a odio assumenda
            blanditiis.
          </p>
          <h4>Visions of business</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            et ullam, facilis autem quia expedita necessitatibus animi vero
            quibusdam, voluptates inventore ab nulla a nobis. Enim quas quos
            maiores et.
          </p>
        </div>

        <div class="card-queries w-50 bg-light">
          <span>Consultas marcadas</span>
          <div className="queries row g-2">
            <CalendarComponent onChange={onChange} />
            <ListQueries value={dateCalendar} time={Time} home="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
