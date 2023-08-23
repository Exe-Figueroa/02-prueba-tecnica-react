import React, { useContext } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { DataContext } from "../dataContext/DataContext";
import '../styles/movie.css'

export function Movies(props) {
  const {validator, movies} = useContext(DataContext);
  console.log(movies)
  return (
    <div className="home-container">
    {movies.map(index =>(
      <CategoryCard
        title={index.title}
        img={index.images['Poster Art'].url}
        key={index.title}
      />
    ))}

    </div>
  );
}
