import React, { useContext, useState } from "react";
import "./index.css";
import { MdEdit, MdSearch } from "react-icons/md";
import Badge from "../Badge";
import ModalComponent from "../Modal";
import { GlobalContext } from "../../hooks/context/globalState";
import useDataQuerie from "../../locales/dataQueries";
import ShowData from "../ShowData";

function TableList() {
  const contextForm = useContext(GlobalContext);
  const { Time } = useDataQuerie();

  const [modal, setModal] = useState(false);
  const [showData, setShowData] = useState(false);
  const [idShow, setIdShow] = useState();

  const toggle = () => {
    setModal(!modal);
  };

  const toggleShow = () => {
    setShowData(!showData);
  };

  function showPatience(id) {
    setIdShow(id);
    toggleShow();
  }

  return (
    <>
      <div className="scheduleM">
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
              {contextForm.patients.map((data) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{data.name}</td>
                    <td>{data.cpf}</td>
                    <td>{data.gender === "1" ? "Masculino" : "Feminino"}</td>
                    <td>
                      {Time?.map((time) => time.id === +data.time && time.hour)}
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
                        <MdEdit
                          size={26}
                          className="pointer"
                          onClick={toggle}
                        />
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
        <ModalComponent toggle={toggle} show={modal} />
        <ShowData id={idShow} toggle={toggleShow} show={showData} />
      </div>
    </>
  );
}

export default TableList;
