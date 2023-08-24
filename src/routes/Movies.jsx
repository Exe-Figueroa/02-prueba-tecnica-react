import React, { useContext, useState } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { DataContext } from "../dataContext/DataContext";
import "../styles/movie.css";

export function Movies(props) {
  const { validator, movies } = useContext(DataContext);
  const [modalState, setModalState] = useState({
    title: "",
    img: "",
    description: "",
    year: 0,
  });
  console.log(movies, modalState);

  function filterToModal(title) {
    const movieFiltered = movies.find((movie) => movie.title == title);
    console.log({ movies, modalState });
    setModalState({
      title: movieFiltered.title,
      img: movieFiltered.images["Poster Art"].url,
      description: movieFiltered.description,
    });
  }

  return (
    <div className="home-container">
      {movies.map((index) => (
        <CategoryCard
          filterToModal={filterToModal}
          title={index.title}
          img={index.images["Poster Art"].url}
          key={index.title}
        />
      ))}

      <div className="modal">
        <h2>{modalState.title}</h2>
        <img src={modalState.img} alt="Poster Art de Movie" />
        <p>{modalState.description}</p>
        <span>{modalState.year}</span>
      </div>
    </div>
  );
}
