/* eslint-disable @next/next/no-img-element */
import React from "react";
import './AsideMenu.scss'
import logo from '@/assets/iqea_logo.png'
import logoDev from '@/assets/logo_450x200_azul_trans.png'

export default function AsideMenu() {
  return (
    <nav>
      <div className="logo">
        <img src={logo.src} alt="logo" />
      </div>
      <div className="links">
        <ul>
          <li>Mis Cotizaciones</li>
          <li>dos</li>
          <li>tres</li>
          <li>cuatro</li>
        </ul>
      </div>
      <div className="dev-logo">
        <img src={logoDev.src} alt="logoDev" />
      </div>
    </nav>
  );
}
