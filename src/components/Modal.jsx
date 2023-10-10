import React from 'react'
import "../styles/Modal.css"


export function Modal({ title, img, description, releaseYear, seeModal, setSeeModal, id, category, toggleForm, setHandleRequest }) {
  async function deleteItem() {
    setSeeModal(false);
    const API = `https://api-moviesandseries-canterasoftware.onrender.com/api/v1/${category}/${id}`;
    console.log('eliminando');
    try {
      const res = await fetch(API, {
        method: 'DELETE'
      });
      if (res.ok) {
        console.log('eliminado');
        setHandleRequest({ success: true, message: 'Se ha eliminado correctamente' });
        setTimeout(() => {
          setHandleRequest({ success: false });
        }, 2000);
      } else {
        console.log('no se eliminó');
        setHandleRequest({ failure: true, message: 'Fallo al eliminar' });
        setTimeout(() => {
          setHandleRequest({ failure: false });
        }, 2000);
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div className={seeModal ? "blur" : null}></div>
      <div className={seeModal ? 'modal-container' : 'modal-container inactive'}>
        <section className='modal-container-contend'>
          <button className='bottons-btn-exit'
            onClick={() => setSeeModal(false)}
          >
            x
          </button>
          <div className='modal-container-card'>
            <img className="modal-container-img" src={img} alt="" />
            <div className='modal-container-title'>
              <h2 >{title}</h2>
              <span>{releaseYear}</span>
            </div>

          </div>
        </section>

        <p className='modal-container-text'>{description}
        </p>

        <div className="bottons">
          <button
            className='bottons-btn-edit'
            onClick={() => toggleForm()}
          >Editar</button>
          <button
            className="bottons-btn-delete"
            onClick={() => deleteItem()}
          >Eliminar</button>
        </div>
      </div>
    </>
  )
}

