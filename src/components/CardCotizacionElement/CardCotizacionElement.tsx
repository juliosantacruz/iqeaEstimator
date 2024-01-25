import React from "react";
import "./CardCotizacionElement.scss";
import { Cotizacion, useCotizacionStore } from "@/store/cotizacionStore";
import { useRouter } from "next/navigation";

type CardProps = {
  data: Cotizacion;
};



export default function CardCotizacionElement({ data }: CardProps) {
  const router = useRouter();

  const {deleteCotizacion}= useCotizacionStore()
  const {
    projectData,
    waterCotizacion,
    wasteWaterCotizacion,
    reusoCotizacion,
  } = data;


  const handleDelete=()=>{
    deleteCotizacion(projectData?.id as string)
  }

  const handleDetalle=(id:string)=>{
    router.push(`detalle/${id}`)
  }
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
                return (
                  <li
                    key={element.id}
                    style={{ backgroundColor: "rgb(160, 0, 147)" }}
                  >
                    {element.system}
                  </li>
                );
              })}
            {wasteWaterCotizacion &&
              wasteWaterCotizacion.map((element) => {
                return (
                  <li
                    key={element.id}
                    style={{ backgroundColor: "rgb(83, 0, 160)" }}
                  >
                    {element.system}
                  </li>
                );
              })}
            {reusoCotizacion &&
              reusoCotizacion.map((element) => {
                return (
                  <li
                    key={element.id}
                    style={{ backgroundColor: "rgb(48, 0, 160)" }}
                  >
                    {element.system}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="listButton">
        <button className="delete" onClick={handleDelete}>Eliminar</button>
        <button className="details" onClick={()=>handleDetalle(projectData?.id as string)}>Ver Detalle</button>
      </div>
    </article>
  );
}
