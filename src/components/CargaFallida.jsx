import React from 'react';
import '../styles/CargaFallida.css';

export function CargaFallida() {
  return (
    <div className='alert-container'>
      <div className="loaded-alert">
        <span className="alert-card">
         El archivo no pudo cargarse
        </span>
        <img src="../assets/wrong.png" alt="LogoWrong" />
        </div>
    </div>
  );
}