import React from "react";
import { useForm } from "react-hook-form";

import "./index.css";

function RegistrationForm(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

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
              required
            />
          </div>

          <div>
            <label for="cpf" class="form-label">
              CPF
            </label>
            <input
              {...register("cpf")}
              type="text"
              required
              class="form-control"
              id="cpf"
              aria-describedby="cpf"
            />
          </div>

          <div class="form-group">
            <label for="address">Endereço</label>
            <input
              {...register("address")}
              type="text"
              required
              class="form-control"
              id="address"
              placeholder="Rua Brasil, nº 0"
            />
          </div>

          <div>
            <label class="form-label">Adicione o sexo do paciente</label>
            <select
              {...register("gender")}
              class="form-select"
              aria-label="Default select example"
              required
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
                required
                {...register("price")}
                type="number"
                class="form-control"
              />
            </div>
          </div>

          <div className="d-flex flex-column m-0">
            <label for="exampleDate">Data</label>
            <input
              className="rounded p-2 border border-2"
              {...register("date")}
              id="exampleDate"
              name="date"
              placeholder="date"
              type="date"
            />
          </div>

          <div>
            <label for="exampleTime">Defina o horário da consulta</label>
            <select
              {...register("time")}
              class="form-select"
              aria-label="Default select example"
              required
            >
              {props?.time.map((hours) => {
                return <option value={hours.hour}>{hours.hour}</option>;
              })}
            </select>
          </div>

          <div>
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
