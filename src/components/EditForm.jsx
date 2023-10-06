import React, { useState } from 'react';
import "../styles/NewForm.css";

export function EditForm({ modalState, toggleForm }) {
  const [formData, setFormData] = useState({
    title: modalState.title,
    releaseYear: modalState.releaseYear,
    description: modalState.description,
    img: modalState.img,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log({ name, value })
    if (name === "releaseYear") {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    };
    console.log(formData)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submit')
    try {
      const response = await fetch(`https://213vgqlp-3000.brs.devtunnels.ms/api/v1/${modalState.category}/${modalState.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Título agregado exitosamente');
      } else {
        alert('Hubo un error al agregar el título.');
      }
    } catch (error) {
      console.error({ error });
    }
  };

  return (

    <form className='new-form' onSubmit={handleSubmit}>
      <button className='new-form-btn-exit' type="button"
        onClick={() => toggleForm()}
      >
        x
      </button>
      <div className='new-form-container'>
        <label className='new-form-label'>
          Title:
          <input
            value={formData.title}
            type="text"
            name="title"
            placeholder='Title'
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Description:
          <input
            value={formData.description}
            type="text"
            name="description"
            placeholder='Description'
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Release Year:
          <input
            value={formData.releaseYear}
            type="number"
            name="releaseYear"
            placeholder='Release Year'
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Url img:
          <input
            value={formData.img}
            type="text"
            name='img'
            url=''
            placeholder='Url img'
            onChange={(e) => handleChange(e)}
          /></label>

        <button type="submit">Send</button>
      </div>
    </form>

  );
}

