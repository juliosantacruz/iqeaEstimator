import { PriceValue, ProjectData } from "@/Types/ProjectData";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";





export interface Cotizacion {
  projectData?: ProjectData;
  waterCotizacion?: PriceValue[];
  wasteWaterCotizacion?: PriceValue[]|[];
  reusoCotizacion?: PriceValue[]|[];
}

export interface CotizacionStore {
  cotizaciones:Cotizacion[],
  addCotizacion:(cotizacion:Cotizacion)=>void,
  deleteCotizacion:(cotizacion:Cotizacion)=>void,
}


export const useCotizacionStore = create(
  persist<CotizacionStore>(
    (set)=>({
      cotizaciones:[],
      addCotizacion:(cotizacion:Cotizacion)=> set((state)=>({
        cotizaciones:[...state.cotizaciones, cotizacion]
      })),
      deleteCotizacion:()=>{}
    }),
    {
      name: "cotizacion-estimator-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
