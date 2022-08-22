import React, { useContext } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { GlobalContext } from "../../hooks/context/globalState";

function DeletePatiente(props) {
  const { deletePatiente } = useContext(GlobalContext);

  function Delete() {
    deletePatiente(props.id);
    props.toggle();
  }

  return (
    <>
      <Modal isOpen={props.show} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>
          Tem certeza que deseja deletar esta consulta?
        </ModalHeader>
        <ModalFooter>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={props.toggle}
          >
            Fechar
          </button>
          <button
            type="button"
            class="btn btn-danger ml-2"
            onClick={() => Delete()}
          >
            Deletar paciente
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default DeletePatiente;
