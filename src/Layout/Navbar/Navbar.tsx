/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./Navbar.scss";
import logo from "@/assets/iqea_logo.png";
import UserImg from "@/assets/bx-user-circle.svg";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo.src} alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>IQEA</li>
            <li>Inicio</li>
            <li>
              <div className="dev-logo">
                <img src={UserImg.src} alt="logoDev" />
              </div>

            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
