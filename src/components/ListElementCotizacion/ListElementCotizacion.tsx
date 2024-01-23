import React from "react";
import "./ListElementCotizacion.scss";

type CotizacionScopeType = {
  id: number | string;
  system: string;
  type: string;
  flow: number;
  unit: string;
};

type CotizacionType = {
  id: number | string;
  title: string;
  location: string;
  scope: CotizacionScopeType[];
  start_date: string;
};

type ListElementType = {
  data: CotizacionType;
};
export default function ListElementCotizacion({ data }: ListElementType) {
  const { title, location, scope, start_date } = data;

  return (
    <article className="listElement">
      <div className="listContent">
        <div className="listHeader">
          <h3>{title}</h3>
        </div>
        <div className="listFooter">
          <p>Sistemas Cotizados:</p>
          <ul>
            {scope &&
              scope.map((scope) => {

                const setBackground=()=>{
                  if(scope.system==='Water') return 'rgb(160, 0, 147)'
                  if(scope.system==='WasteWater') return 'rgb(83, 0, 160)'
                  if(scope.system==='Other') return 'rgb(48, 0, 160)'

                }

                return <li key={scope.id} style={{backgroundColor:`${setBackground()}`}}>{scope.type}</li>;
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
