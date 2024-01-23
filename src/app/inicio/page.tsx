import React from "react";
import "./Inicio.scss";
import NewElementBtn from "@/components/NewElementBtn/NewElementBtn";
import ListElementCotizacion from "@/components/ListElementCotizacion/ListElementCotizacion";

const dummieData = [
  {
    id: 1,
    title: "PTAR 16 Tilco",
    location: 'Acapulco',
    scope: [
      { id:1,system:'Water', type: "Filtracion", flow: 15, unit: "m3/dia" },
      { id:2,system:'Water', type: "Suavizadores", flow: 15, unit: "m3/dia" },
      { id:3,system:'Water', type: "Osmosis Inversa", flow: 15, unit: "m3/dia" },
      { id:4,system:'WasteWater', type: "PreTratamiento", flow: 15, unit: "m3/dia" },
    ],
    start_date:'20/10/2024'
  },
  {
    id: 2,
    title: "PTAR 16 Tilco",
    location: 'Acapulco',
    scope: [
      { id:1,system:'Water', type: "Filtracion", flow: 15, unit: "m3/dia" },
      { id:2,system:'Water', type: "Suavizadores", flow: 15, unit: "m3/dia" },
      { id:3,system:'Water', type: "Osmosis Inversa", flow: 15, unit: "m3/dia" },
      { id:4,system:'WasteWater', type: "PreTratamiento", flow: 15, unit: "m3/dia" },
    ],
    start_date:'20/10/2024'
  },
  {
    id: 3,
    title: "PTAR 16 Tilco",
    location: 'Acapulco',
    scope: [
      { id:1,system:'Water', type: "Filtracion", flow: 15, unit: "m3/dia" },
      { id:2,system:'Water', type: "Suavizadores", flow: 15, unit: "m3/dia" },
      { id:3,system:'Water', type: "Osmosis Inversa", flow: 15, unit: "m3/dia" },
      { id:4,system:'WasteWater', type: "PreTratamiento", flow: 15, unit: "m3/dia" },
    ],
    start_date:'20/10/2024'
  },
  {
    id: 4,
    title: "PTAR 16 Tilco",
    location: 'Acapulco',
    scope: [
      { id:1,system:'Water', type: "Filtracion", flow: 15, unit: "m3/dia" },
      { id:2,system:'Water', type: "Suavizadores", flow: 15, unit: "m3/dia" },
      { id:3,system:'Water', type: "Osmosis Inversa", flow: 15, unit: "m3/dia" },
      { id:4,system:'WasteWater', type: "PreTratamiento", flow: 15, unit: "m3/dia" },
    ],
    start_date:'20/10/2024'
  },
];

export default function page() {
  return (
    <main className="inicioPage">
      <div className="titlePage">
      <h1>Mis Cotizaciones</h1>
      </div>

      <div className="cotizacionesList">
      {dummieData&&
      dummieData.map((element)=>{
        return(
        <ListElementCotizacion data={element} key={element.id}/>

        )
      })}

      </div>
      <NewElementBtn />
    </main>
  );
}
