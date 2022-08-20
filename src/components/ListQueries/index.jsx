import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import "./index.css";

function ListQueries(props) {
  return (
    <>
      <div class="ex3 card border-0 mb-3 bg-light">
        <div className="ps-2">{props.value}</div>
        {props.time.map((data) => {
          return (
            <div class="card shadow-sm mb-2 bg-body rounded border-0 d-flex align-items-start ">
              <div class="card-body w-100  d-flex justify-content-between">
                <div className="d-flex align-items-center justify-content-center">
                  <h5 className="m-0">{data.hour}</h5>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="{data.data.data?.employee?.image}"
                    width="35px"
                    height="35px"
                    alt=""
                  />
                  <div className="ms-3">
                    {/* <h6>"{data.data.data?.employee?.name}"</h6>
                    <h6>"{data.data.data?.employee?.description}"</h6> */}
                  </div>
                </div>
                <div className="d-flex align-items-end">
                  <BsFillTrashFill />
                  <MdEdit />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListQueries;
