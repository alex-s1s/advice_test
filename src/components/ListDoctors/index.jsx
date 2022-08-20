import React from "react";
import { ListDoctors } from "../../locales/doctors";
import "./index.css";

function ListDoctor() {
  return (
    <>
      <div className="ps-2">Médicos</div>

      <div class="card border-0 bg-light">
        {ListDoctors.map((data) => {
          return (
            <div class="row border mx-1 mb-2 rounded bg-white">
              <div class="col-md-4 d-flex align-items-center justify-content-center">
                <img
                  className="w-100"
                  loading="lazy"
                  width="70%"
                  height="70%"
                  src={data.image}
                  class="rounded-circle"
                  alt="..."
                />
              </div>
              <div class="col-md-8 d-flex align-items-center">
                <div class="card-body">
                  <h5 class="card-title ">{data.name}</h5>
                  <p class="card-text">{data.description}</p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListDoctor;
