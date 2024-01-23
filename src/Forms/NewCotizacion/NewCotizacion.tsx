"use client";
import InputField from "@/components/InputField/InputField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./NewCotizacion.scss";

export default function NewCotizacion(props:any) {
  const {modal} = props

  const { register, handleSubmit } = useForm();

  const [page, setPage]=useState(0)
  const [waterOptions, setWaterOptions] = useState(false);
  const [wasteWaterOptions, setWasteWaterOptions] = useState(false);
  const [reusoOptions, setReusoOptions] = useState(false);
  console.log(waterOptions);
  const leSubmit = (data: any) => {
    console.log(data);

    modal.setViewForm(false)
  };


  const handleNext=()=>{
    setPage(page+1)
  }

  const handlePrev=()=>{
    setPage(page-1)
  }

  return (
    <div className="cotizacionForm">
    <div className="formTitle">
      <h2>Nueva Cotizacion</h2>
      <button onClick={()=>modal.setViewForm(false)}>x</button>
    </div>
    <form

      onSubmit={handleSubmit((data) => {
        console.log(data);
        modal.setViewForm(false)
      })}
    >
      {
        page===0 &&
      <fieldset className="ProjectInfo">
        <InputField
          name="name"
          label="Nombre del proyecto"
          type="text"
          register={register}
        />
        <InputField
          name="location"
          label="Ubicacion del proyecto"
          type="text"
          register={register}
        />
        <InputField
          name="Fecha de arranque"
          label="Nombre"
          type="date"
          register={register}
        />
      </fieldset>

      }
      {
        page ===1 &&
        <>

      <div className="waterOptions">
        <label htmlFor="water">Sistema de Agua Limpia</label>
        <input
          type="checkbox"
          name="water"
          id=""
          checked={waterOptions}
          onChange={() => setWaterOptions(!waterOptions)}
        />
      </div>
      {waterOptions && (
        <fieldset className="ProjectData">
          <InputField
            name="filtracion"
            label="Sistema de filtracion"
            type="number"
            register={register}
          />
          <InputField
            name="suavisador"
            label="Sistema suavisador"
            type="number"
            register={register}
          />
          <InputField
            name="osmosis"
            label="Sistema de Osmosis"
            type="number"
            register={register}
          />
        </fieldset>
      )}
      {/* {waterOptions && (
        <fieldset className="ProjectData">
          <label htmlFor="filtracion">Sistema de filtracion</label>
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />

        </fieldset>
      )} */}

      <div className="waterOptions">
        <label htmlFor="water">Sistema de Agua Residual</label>
        <input
          type="checkbox"
          name="water"
          id=""
          checked={wasteWaterOptions}
          onChange={() => setWasteWaterOptions(!wasteWaterOptions)}
        />
      </div>
      {wasteWaterOptions && (
        <fieldset className="ProjectData">
          <InputField
            name="pretratamiento"
            label="Pretratamiento"
            type="number"
            register={register}
          />
          <InputField
            name="lodosActivados"
            label="Lodos Activados"
            type="number"
            register={register}
          />
          <InputField
            name="bioFiltracion"
            label="Bio Filtracion"
            type="number"
            register={register}
          />
          <InputField
            name="mbbr"
            label="MBBR"
            type="number"
            register={register}
          />
        </fieldset>
      )}

      <div className="waterOptions">
        <label htmlFor="water">Sistema de Reuso</label>
        <input
          type="checkbox"
          name="water"
          id=""
          checked={reusoOptions}
          onChange={() => setReusoOptions(!reusoOptions)}
        />
      </div>
      {reusoOptions && (
        <fieldset className="ProjectData">
          <InputField
            name="osmosis"
            label="Osmosis Inversa"
            type="number"
            register={register}
          />
          <InputField
            name="ultrafiltracion"
            label="Ultrafiltracion"
            type="number"
            register={register}
          />
        </fieldset>
      )}
        </>
      }


      <button type="button" onClick={handlePrev}>Atras</button>
      <button type="button" onClick={handleNext}>Siguiente</button>
      <button>Enviar</button>

    </form>
    </div>
  );
}
