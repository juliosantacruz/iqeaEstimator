/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./Navbar.scss";
import logo from "@/assets/iqea_logo.png";
import UserImg from "@/assets/bx-user-circle.svg";
import Link from "next/link";

export default function Navbar() {

  const isDev = process.env.ISDEV
  return (
    <header>
      <nav>
        <div className="logo">
        <a href={isDev?'/inicio':'https://iqea-page.vercel.app/'}>
          <img src={logo.src} alt="logo" />
        </a>
        </div>
        <div className="links">
          <ul>
          {/* <a href={!isDev?'/':'https://iqea-page.vercel.app/'}>
            <li>IQEA</li>
            </a> */}
            {/* <li>Inicio</li> */}
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
