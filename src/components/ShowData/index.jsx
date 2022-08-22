import React, { useContext } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { GlobalContext } from "../../hooks/context/globalState";
import useDataQuerie from "../../locales/dataQueries";

function ShowData(props) {
  const { Time } = useDataQuerie();
  const contextForm = useContext(GlobalContext);

  return (
    <>
      <Modal isOpen={props.show} toggle={props.toggle}>
        <ModalHeader
          className="d-flex justify-content-center align-items-center "
          toggle={props.toggle}
        >
          Dados da consulta
        </ModalHeader>
        <ModalBody>
          {contextForm.patients.map((data) => {
            if (data.id === props.id)
              return (
                <>
                  <p>
                    <span>Nome: </span> {data.name}
                  </p>
                  <p>
                    <span>CPF: </span> {data.cpf}
                  </p>
                  <p>
                    <span>data: </span> {data.date}
                  </p>
                  <p>
                    <span>Gênero: </span>
                    {data.gender === "1" ? "Masculino" : "Feminino"}
                  </p>
                  <p>
                    <span>Endereço: </span> {data.address}
                  </p>
                  <p>
                    <span>Valor: </span> R${data.price}
                  </p>
                  <p>
                    <span>status: </span>
                    {data.status === "info" ? "Aberto" : "Fechado"}
                  </p>
                  <p>
                    <span>Horário: </span>
                    {Time?.map((time) => time.id === +data.time && time.hour)}
                  </p>
                </>
              );
          })}
        </ModalBody>
      </Modal>
    </>
  );
}

export default ShowData;
