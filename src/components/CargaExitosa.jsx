import React from 'react';
import '../styles/CargaExitosa.css';
import ImgCargaExitosa from '../assets/ok-logo-grass.png'

export function CargaExitosa({ message }) {
  return (
    <div className='alert-container'>
      <div className="loaded-alert">
        <span className="alert-card">
          {message}
        </span>
        <img className='ok-img' src={ImgCargaExitosa} alt="LogoOk" />
      </div>
    </div>
  );
}