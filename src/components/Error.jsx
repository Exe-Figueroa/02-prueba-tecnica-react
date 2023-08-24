import React from 'react';
import '../styles/Error.css';

export function Error(props) {
  return (
    <div className='error-container'>
      <div className="error">
        <span className="error-card">
          Lo sentimos, ha ocurrido un error.
          Intente de nuevo más tarde.
        </span>
        </div>
    </div>
  );
}
