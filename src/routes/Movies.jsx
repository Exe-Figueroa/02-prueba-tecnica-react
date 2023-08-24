import React, { useContext, useState } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { DataContext } from "../dataContext/DataContext";

import "../styles/movie.css";

export function Movies(props) {
  const {error, validator, movies} = useContext(DataContext);
  
  return (
    <div className="home-container">
      {
        (!validator && error) && <Error />
      }
      {
        (!validator && !error) && <Loader />
      }
      {
        (validator && !error) && movies.map(index =>(
          <CategoryCard
            title={index.title}
            img={index.images['Poster Art'].url}
            key={index.title}
          />
        ))
      }
    </div>
  );
}
