import React, { useState } from 'react';

export function NewForm() {
  const [titleData, setTitleData] = useState({
    category: '',
    title: '',
    year:'',
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
    <div>
      <h2><input type="" />Categoría</h2>


      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            name="title"            
          />
          <input 
          type="text"
          name="Description"
          />
          <input 
          type="date"
          name="year" 
           />
           <input 
           type="text"
           name='IMG'
           url= ''
            />
        </label>
        {/* Agrega más campos de entrada aquí según tus necesidades */}
        
        <button type="submit">Agregar Título</button>
      </form>
    </div>
  );
}

