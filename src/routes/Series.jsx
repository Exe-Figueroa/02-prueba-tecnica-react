import React, { useContext } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { DataContext } from "../dataContext/DataContext";
import "../styles/Series.css"

export function Series() {
  const { validator, series } = useContext(DataContext);
  console.log(series);

  return (
    <div className="series-container"> 
      {series.map(index => (
        <CategoryCard
          title={index.title}
          img={index.images["Poster Art"].url}
          key = {index.title}
        />
      ))}
  </div>
  );
}
