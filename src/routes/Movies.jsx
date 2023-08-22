import React, { useContext } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { DataContext } from "../dataContext/DataContext";

export function Movies(props) {
  const {validator, movies} = useContext(DataContext);
  console.log(movies)
  return (
    <div>
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
