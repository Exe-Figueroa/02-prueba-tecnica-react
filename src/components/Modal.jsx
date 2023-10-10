
import React from 'react'
import "../styles/Modal.css"


export function Modal({ title, img, description, releaseYear, seeModal, setSeeModal, id, category, toggleForm, setHandleRequest }) {
  async function deleteItem() {
    const API = `https://api-moviesandseries-canterasoftware.onrender.com/api/v1/${category}/${id}`;
    try {
      const res = await fetch(API, {
        method: 'DELETE'
      });
      const data = await res.json()
      console.log(data)
      // location.reload()
      if (res.ok) {
        setHandleRequest({ success: true });
        setTimeout(() => {
          setHandleRequest({ success: false, message: "se elimino correctamente" });
        }, 2000);
      } else {
        setHandleRequest({ failure: true });
        setTimeout(() => {
          setHandleRequest({ failure: false, message: "no se pudo eliminar" });
        }, 2000);
      }
      //alert('Se eliminó correctamente')
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

