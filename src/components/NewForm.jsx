import React, { useState } from 'react';
import "../styles/NewForm.css";

export function NewForm() {
  const [titleData, setTitleData] = useState({
    category: '',
    title: '',
    year: '',
    description: '',
    img: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTitleData({ ...titleData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/ruta-del-backend-para-agregar-titulo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(titleData),
      });

      if (response.ok) {
        alert('Título agregado exitosamente');
        // Puedes hacer redirección o limpiar el formulario aquí si es necesario.
      } else {
        alert('Hubo un error al agregar el título.');
      }
    } catch (error) {
      console.error('Error al enviar el título:', error);
    }
  };

  return (

    <form className='new-form' onSubmit={handleSubmit}>
      <select className='new-form-select'>
        <option value="Categories" selected>Categories</option>
        <option value="Series">Series</option>
        <option value="Movies">Movies</option>
      </select>
      <label className='new-form-label'>
        Title:
        <input
          type="text"
          name="title"
          placeholder='Title'
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="Description"
          placeholder='Description'
        />
      </label>
      <label>
        Release Year:
        <input
          type="date"
          name="year"
          placeholder='Realease Year'
        />
      </label>
      <label>
        Url img:
        <input
          type="text"
          name='IMG'
          url=''
          placeholder='Url img'
        /></label>

      <button type="submit">Send</button>
    </form>

  );
}

