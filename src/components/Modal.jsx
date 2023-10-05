
import React from 'react'
import "../styles/Modal.css"


export function Modal({ title, img, description, releaseYear, seeModal, setSeeModal, id, category }) {
  async function deleteItem() {
    const API = `https://213vgqlp-3000.brs.devtunnels.ms/api/v1/${category}/${id}`;
    try {
      const res = await fetch(API, {
        method: 'DELETE'
      });
      const data = await res.json()
      console.log(data)
      // location.reload()
      alert('Se eliminó correctamente')
    } catch (error) {
      console.error(error)
    }
  }

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
          <button className='bottons-btn-edit'>Editar</button>

          <button className="bottons-btn-delete" onClick={() => deleteItem()} >Eliminar</button>
        </div>
      </div>

    </>
  )
}
