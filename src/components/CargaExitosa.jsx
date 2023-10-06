import React from 'react';
import '../styles/CargaExitosa.css';

export function CargaExitosa() {
  return (
    <div className='alert-container'>
      <div className="loaded-alert">
        <span className="alert-card">
         El archivo ha sido cargado exitosamente
        </span>
        <img src="../assets/ok-logo-grass.png" alt="LogoOk" />
        </div>
    </div>
  );
}