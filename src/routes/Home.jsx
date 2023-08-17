import React, {useContext, useEffect} from 'react';
import { DataContext } from '../dataContext/DataContext';

export function Home() {
  const { validator, series, movies } = useContext(DataContext);
  
  if (!!validator) {
    console.log({ series, movies, validator })
  }
  
  return (
    <div>
      
    </div>
  );
}
