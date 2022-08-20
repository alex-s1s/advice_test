import React, { useState } from "react";
import "./index.css";
import { MdEdit, MdSearch } from "react-icons/md";
import Badge from "../Badge";
import ModalComponent from "../Modal";

function TableList() {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    console.log(modal);
  };

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
                <th scope="col">Endereço</th>
                <th scope="col">Sexo</th>
                <th scope="col">Horário</th>
                <th scope="col">valor consulta</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className="table-group-divider table-borderless">
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <Badge type="info" status="Aberto" />
                </td>
                <td>
                  <div className="d-flex justify-content-around">
                    <MdEdit size={26} className="pointer" onClick={toggle} />
                    <MdSearch size={26} className="pointer" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>
                  <Badge type="warning" status="fechado" />
                </td>
                <td>
                  <div className="d-flex justify-content-around">
                    <MdEdit size={26} className="pointer" onClick={toggle} />
                    <MdSearch size={26} className="pointer" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>
                  <Badge type="info" status="Aberto" />
                </td>
                <td>
                  <div className="d-flex justify-content-around">
                    <MdEdit size={26} className="pointer" onClick={toggle} />
                    <MdSearch size={26} className="pointer" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>
                  <Badge type="warning" status="fechado" />
                </td>
                <td>
                  <div className="d-flex justify-content-around">
                    <MdEdit size={26} className="pointer" onClick={toggle} />
                    <MdSearch size={26} className="pointer" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>
                  <Badge type="warning" status="fechado" />
                </td>
                <td>
                  <div className="d-flex justify-content-around">
                    <MdEdit size={26} className="pointer" onClick={toggle} />
                    <MdSearch size={26} className="pointer" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>
                  <Badge type="warning" status="fechado" />
                </td>
                <td>
                  <div className="d-flex justify-content-around">
                    <MdEdit size={26} className="pointer" onClick={toggle} />
                    <MdSearch size={26} className="pointer" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ModalComponent toggle={toggle} show={modal} />
      </div>
    </>
  );
}

export default TableList;
