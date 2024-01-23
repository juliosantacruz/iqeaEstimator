"use client";
import React, { useState } from "react";
import "./NewElementBtn.scss";
import NewCotizacion from "@/Forms/NewCotizacion/NewCotizacion";

export default function NewElementBtn() {
  const [viewForm, setViewForm] = useState(false);

  const handleAddBtn = () => {
    setViewForm(true);
  };
  return (
    <>
      <div className="addBtn">
        <button onClick={handleAddBtn}>+</button>
      </div>

      {viewForm && (
        <div className="formContainer">
          <NewCotizacion modal={{ viewForm, setViewForm }} />
        </div>
      )}
    </>
  );
}
