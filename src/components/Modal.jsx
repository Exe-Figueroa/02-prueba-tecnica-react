
import React from 'react'
import "../styles/Modal.css"

export function Modal({ title, img, description, releaseYear, seeModal, setSeeModal }) {

  return (
    <div className={seeModal ? 'modal-container' : 'modal-container inactive'}>
      <span className='exit-btn'
      onClick={()=>setSeeModal(false)}
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

    </div>




  )
}
