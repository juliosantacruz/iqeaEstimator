import React from "react";
import "./CardCotizacionElement.scss";
import { Cotizacion } from "@/store/cotizacionStore";


type CardProps={
  data:Cotizacion
}

 const setBackground=(element:any)=>{
                  if(element.system==='Water') return 'rgb(160, 0, 147)'
                  if(element.system==='WasteWater') return 'rgb(83, 0, 160)'
                  if(element.system==='Other') return 'rgb(48, 0, 160)'

                }

export default function CardCotizacionElement({ data }: CardProps) {
  const { projectData, waterCotizacion, wasteWaterCotizacion, reusoCotizacion } = data;

  return (
    <article className="listElement">
      <div className="listContent">
        <div className="listHeader">
          <h3>{projectData?.name}</h3>
        </div>
        <div className="listFooter">
          <p>Sistemas Cotizados:</p>
          <ul>
            {waterCotizacion &&
              waterCotizacion.map((element) => {
                return <li key={element.id} style={{backgroundColor:'rgb(160, 0, 147)'}}>{element.system}</li>;
              })}
            {wasteWaterCotizacion &&
              wasteWaterCotizacion.map((element) => {
                return <li key={element.id} style={{backgroundColor:'rgb(83, 0, 160)'}}>{element.system}</li>;
              })}
            {reusoCotizacion &&
              reusoCotizacion.map((element) => {
                return <li key={element.id} style={{backgroundColor:'rgb(48, 0, 160)'}}>{element.system}</li>;
              })}
          </ul>
        </div>
      </div>
      <div className="listButton">
        <button className="delete">Eliminar</button>
        <button className="details">Ver Detalle</button>
      </div>
    </article>
  );
}
