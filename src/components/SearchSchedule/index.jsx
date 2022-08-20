import React from "react";
import { HiFilter } from "react-icons/hi";
import { MdSearch } from "react-icons/md";
import "./index.css";

function SearchSchedule() {
  return (
    <>
      <div className="search w-100 d-flex justify-content-between align-items-center">
        <div class="input-group mb-3 w-25">
          <input
            type="text"
            class="form-control"
            placeholder="Busca rápida"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <MdSearch size={26} className="pointer" />
          </button>
        </div>

        <div className="search-element">
          <HiFilter />
          <span>Filtros avançados</span>
        </div>
      </div>
    </>
  );
}

export default SearchSchedule;
