import React from 'react';
import '../styles/Category.css';

import { Link } from 'react-router-dom'

export function CategoryCard({img, title, name}) {
  return (
    <Link 
    to={name} 
    className='category-card-container'
    >
      <img src={img} alt="" className='category-img'/>
      {name && <p className="category-name">{name}</p>}
      <h2 className='category-title'>{title}</h2>
    </Link>
  );
}
