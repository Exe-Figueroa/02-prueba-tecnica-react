import React from 'react';
import '../styles/CargaFallida.css';
import ImgCargaFallida from '../assets/wrong.png'

export function CargaFallida({ message }) {
  return (
    <div className='alert-container'>
      <div className="loaded-alert">
        <span className="wrong-alert-card">
          {message}
        </span>
        <img className='wrong-img' src={ImgCargaFallida} alt="LogoWrong" />
      </div>
    </div>
  );
}