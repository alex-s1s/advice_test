import React, { useContext, useState } from "react";
import "./index.css";
import { MdSearch } from "react-icons/md";
import Badge from "../Badge";
import { GlobalContext } from "../../hooks/context/globalState";
import useDataQuerie from "../../locales/dataQueries";
import ShowData from "../ShowData";
import { HiFilter } from "react-icons/hi";

function TableList() {
  const contextForm = useContext(GlobalContext);
  const { Time } = useDataQuerie();

  const [showData, setShowData] = useState(false);
  const [idShow, setIdShow] = useState();
  const [filter, setFilter] = useState("");

  const toggleShow = () => {
    setShowData(!showData);
  };

  function showPatience(id) {
    setIdShow(id);
    toggleShow();
  }

  console.log(filter);

  return (
    <>
      <div className="scheduleM">
        <div className="search">
          <div className="search w-100 d-flex justify-content-between align-items-center">
            <div class="input-group mb-3 w-25">
              <input
                type="text"
                id="myInput"
                class="form-control"
                placeholder="Busca rápida"
                value={filter}
                aria-describedby="button-addon2"
                onChange={(event) => setFilter(event.target.value)}
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
        </div>
        <div className="schedule table-responsive">
          <table class="table table-striped  align-middle">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">CPF</th>
                <th scope="col">Sexo</th>
                <th scope="col">Horário</th>
                <th scope="col">Valor</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className="table-group-divider table-borderless">
              {contextForm.patients
                .filter(
                  (f) =>
                    f.name
                      .toLocaleUpperCase()
                      .includes(filter.toLocaleUpperCase()) || filter === ""
                )
                .map((data, idx) => {
                  return (
                    <tr>
                      <th scope="row">{idx + 1}</th>
                      <td>{data.name}</td>
                      <td>{data.cpf}</td>
                      <td>{data.gender === "1" ? "Masculino" : "Feminino"}</td>
                      <td>
                        {Time?.map(
                          (time) => time.id === +data.time && time.hour
                        )}
                      </td>
                      <td>{`R$${data.price}`}</td>
                      <td>
                        {data.status === "warning" ? (
                          <Badge type={data.status} status="Fechado" />
                        ) : (
                          <Badge type={data.status} status="Aberto" />
                        )}
                      </td>
                      <td>
                        <div className="d-flex justify-content-around">
                          <MdSearch
                            size={26}
                            className="pointer"
                            onClick={() => showPatience(data.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <ShowData id={idShow} toggle={toggleShow} show={showData} />
      </div>
    </>
  );
}

export default TableList;
