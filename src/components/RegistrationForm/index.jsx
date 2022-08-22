import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./index.css";
import { GlobalContext } from "../../hooks/context/globalState";

function RegistrationForm(props) {
  const { addPatiente } = useContext(GlobalContext);

  const schema = yup
    .object({
      address: yup.string().required("Adicione o endereço"),
      date: yup.string().required("Adicione a data da consulta"),
      name: yup.string().required("Adicione o nome do paciente"),
      cpf: yup.string().required("Adicione o CPF do paciente"),
      price: yup.string().required("Adicione o valor da consulta"),
      status: yup.string().required("Adicione o status da consulta"),
      time: yup.string().required("Adicione o horário da consulta"),
    })
    .required();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    const valuesForm = getValues();
    addPatiente(valuesForm);
    props.toggle();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="p-2 row g-2 bg-white border rounded">
          <div>
            <label for="name">Nome completo</label>
            <input
              {...register("name")}
              name="name"
              type="text"
              class="form-control"
            />
            {errors.name?.message ? (
              <p className="text-danger pt-1">{errors.name?.message}</p>
            ) : (
              ""
            )}
          </div>

          <div>
            <label for="cpf" class="form-label">
              CPF
            </label>
            <input
              {...register("cpf")}
              type="text"
              class="form-control"
              id="cpf"
              aria-describedby="cpf"
            />
            {errors.cpf?.message ? (
              <p className="text-danger pt-1">{errors.cpf?.message}</p>
            ) : (
              ""
            )}
          </div>

          <div class="form-group">
            <label for="address">Endereço</label>
            <input
              {...register("address")}
              type="text"
              class="form-control"
              id="address"
              placeholder="Rua Brasil, nº 0"
            />
            {errors.address?.message ? (
              <p className="text-danger pt-1">{errors.address?.message}</p>
            ) : (
              ""
            )}
          </div>

          <div>
            <label class="form-label">Adicione o sexo do paciente</label>
            <select
              {...register("gender")}
              class="form-select"
              aria-label="Default select example"
            >
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
            </select>
          </div>

          <div>
            <label class="form-label">Valor da consulta</label>
            <div class="input-group mb-3">
              <span class="input-group-text m-0">R$</span>
              <input
                {...register("price")}
                type="number"
                class="form-control"
              />
            </div>

            {errors.price?.message ? (
              <p className="text-danger">{errors.price?.message}</p>
            ) : (
              ""
            )}
          </div>

          <div className="d-flex flex-column m-0 pb-1">
            <label for="exampleDate">Data</label>
            <input
              className="rounded p-2 border border-2"
              {...register("date")}
              id="exampleDate"
              name="date"
              placeholder="date"
              type="date"
            />

            {errors.date?.message ? (
              <p className="text-danger pt-1">{errors.date?.message}</p>
            ) : (
              ""
            )}
          </div>

          <div>
            <label for="exampleTime">Defina o horário da consulta</label>
            <select
              {...register("time")}
              class="form-select"
              aria-label="Default select example"
            >
              {props?.time.map((hours) => {
                return <option value={hours.id}>{hours.hour}</option>;
              })}
            </select>
          </div>

          <div className="mb-2">
            <label for="name" class="form-label">
              Status
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              {...register("status")}
            >
              <option value="warning">Fechado</option>
              <option value="info">Aberto</option>
            </select>
          </div>

          <div class="d-grid">
            <button class="btn btn-primary" type="submit">
              Salvar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;
