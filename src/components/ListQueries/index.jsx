import React, { useContext, useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import { GlobalContext } from "../../hooks/context/globalState";
import useDataQuerie from "../../locales/dataQueries";
import DeletePatiente from "../Delete";
import ShowData from "../ShowData";
import "./index.css";

function ListQueries(props) {
  const { Time } = useDataQuerie();
  const contextForm = useContext(GlobalContext);
  const [modal, setModal] = useState(false);
  const [idDelete, setIdDelete] = useState();

  const [showData, setShowData] = useState(false);
  const [idShow, setIdShow] = useState();

  const toggleShow = () => {
    setShowData(!showData);
  };

  function showPatience(id) {
    setIdShow(id);
    toggleShow();
  }

  const toggle = () => {
    setModal(!modal);
  };

  function showModal(id) {
    setIdDelete(id);
    toggle();
  }

  return (
    <>
      <div class={`ex3 card border-0 mb-3 ${props.bg ? "bg-light" : ""}`}>
        <div className="ps-2">{props.value}</div>
        {contextForm.patients.map((data) => {
          return (
            <div class="card shadow-sm mb-2 bg-body rounded border-0 d-flex align-items-start ">
              <div class="card-body w-100  d-flex justify-content-between">
                <div className="d-flex align-items-center justify-content-center">
                  <h5 className="m-0">
                    {Time?.map((time) => time.id === +data.time && time.hour)}
                  </h5>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={
                      data.gender === "1"
                        ? "https://www.svgrepo.com/show/60582/avatar.svg"
                        : "https://www.svgrepo.com/show/105032/avatar.svg"
                    }
                    width="35px"
                    height="35px"
                    alt=""
                  />
                  <div className="ms-3">
                    <h6>{data.name}</h6>
                    <h6>{data.cpf}</h6>
                  </div>
                </div>
                <div className="d-flex align-items-end align-items-center justify-content-evenly w-25">
                  {props.bg && (
                    <>
                      <BsFillTrashFill
                        size={20}
                        onClick={() => showModal(data.id)}
                      />
                    </>
                  )}
                  <MdSearch
                    size={26}
                    className="pointer "
                    onClick={() => showPatience(data.id)}
                  />
                </div>
              </div>
              <DeletePatiente id={idDelete} toggle={toggle} show={modal} />
              <ShowData id={idShow} toggle={toggleShow} show={showData} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListQueries;
