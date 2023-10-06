import React from 'react';
import '../styles/CargaFallida.css';
import ImgCargaFallida from '../assets/wrong.png'

export function CargaFallida() {
  return (
    <div className='alert-container'>
      <div className="loaded-alert">
        <span className="wrong-alert-card">
         El archivo no pudo cargarse
        </span>
        <img  className='wrong-img' src={ImgCargaFallida} alt="LogoWrong" />
        </div>
    </div>
  );
}