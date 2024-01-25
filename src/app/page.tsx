import React, { Suspense } from "react";
import "./Home.scss";
import NewElementBtn from "@/components/NewElementBtn/NewElementBtn";
import ListElementCotizacion from "@/components/CardCotizacionElement/CardCotizacionElement";
import Loading from "./loading";
import ListElementsCotizacion from "@/components/ListElementsCotizacion/ListElementsCotizacion";

  const dummieData = [

  ];

export default function page() {
  return (
    <main className="inicioPage">
      <div className="titlePage">
      <h1>Mis Cotizaciones</h1>
      </div>

      <div className="cotizacionesList">
        <ListElementsCotizacion/>

      </div>
      <NewElementBtn />

    </main>
  );
}
