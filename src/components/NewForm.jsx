import React, { useState } from 'react';

import "../styles/NewForm.css";


export function NewForm({ setHandleRequest, toggleForm}) {
  const [formData, setFormData] = useState({
    category: 'series',
    title: '',
    releaseYear: '',
    description: '',
    img: '',
  });
  const handleChangeSelect = (e)=>{
    const {value} = e.target;
    setFormData({...formData, category: value});
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
      const response = await fetch(`https://213vgqlp-3000.brs.devtunnels.ms/api/v1/${formData.category}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toggleForm();
        setHandleRequest({success : true});
        setTimeout(()=>{
          setHandleRequest({success: false});
        }, 2000)
      } else {
        toggleForm();
        setHandleRequest({failure : true});
        setTimeout(()=>{
          setHandleRequest({failure: false});
        }, 2000)
      }
    } catch (error) {
      console.error('Error al enviar el título:', error);
    }
  };

  return (

    <form className='new-form' onSubmit={handleSubmit}>
      <button type='button' onClick={()=> toggleForm()}>cerrar</button>
      <div className='new-form-container'>
        <span>Categories</span>
        <select
          className='new-form-select'
          defaultValue="Categories"
          onChange={(e) => handleChangeSelect(e)}
        >
          <option name="series" value="series">Series</option>
          <option name="movies" value="movies">Movies</option>
        </select>
        <label className='new-form-label'>
          Title:
          <input
            type="text"
            name="title"
            placeholder='Title'
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            placeholder='Description'
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Release Year:
          <input
            type="number"
            name="releaseYear"
            placeholder='Release Year'
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Url img:
          <input
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

