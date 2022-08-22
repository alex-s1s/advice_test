import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import useDataQuerie from "../../locales/dataQueries";
import RegistrationForm from "../RegistrationForm";

function ModalComponent(props) {
  const { Time } = useDataQuerie();

  return (
    <>
      <Modal isOpen={props.show} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Adicionar consulta</ModalHeader>
        <ModalBody>
          <RegistrationForm toggle={props.toggle} time={Time} />
        </ModalBody>
      </Modal>
    </>
  );
}

export default ModalComponent;
