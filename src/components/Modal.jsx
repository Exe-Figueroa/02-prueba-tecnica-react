
import React from 'react'
import "../styles/Modal.css"
import { moviesData } from '../export'

export function Modal({ title, img, description, releaseYear, seeModal, setSeeModal }) {

  return (
    <>
      <div className={seeModal ? "blur" : null}></div>
      <div className={seeModal ? 'modal-container' : 'modal-container inactive'}>
        <span className='exit-btn'
          onClick={() => setSeeModal(false)}
        >
          x
        </span>
        <div className='modal-container-card'>
          <img className="modal-container-img" src={img} alt="" />
          <div className='modal-container-title'>
            <h2 >{title}</h2>
            <span>{releaseYear}</span>
          </div>
        </div>
        <p className='modal-container-text'>{description}</p>
        <div className="bottons">
          <p className='bottons-btn-edit'>Editar</p>

          <p className="bottons-btn-delete" >Eliminar</p>
        </div>
      </div>

    </>
  )
}
