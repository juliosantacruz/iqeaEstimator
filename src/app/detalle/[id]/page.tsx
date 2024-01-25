
import Cotizacion from '@/components/Cotizacion/Cotizacion'
import { useCotizacionStore } from '@/store/cotizacionStore'
import React from 'react'
import './DetalleID.scss'

export default function page({ params }: { params: { id: string } }) {

  console.log(params.id)
  return (
    <main>
      <div className="title">
        <h1>Detalle de Cotizacion</h1>
      </div>

      <Cotizacion id={params.id}/>
    </main>
  )
}
