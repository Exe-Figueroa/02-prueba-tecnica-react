import React, { useContext, useState } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { DataContext } from "../dataContext/DataContext";
import { Modal } from "../components/Modal";

import "../styles/movie.css";

export function Movies(props) {
  const {error, validator, movies} = useContext(DataContext);
  const [seeModal, setSeeModal] = useState(false)

  const [modalState, setModalState] = useState({
    title: "",
    img: "",
    description: "",
    releaseYear: 0,
  });

  function filterToModal(title) {
    const movieFiltered = movies.find(movie => movie.title == title);
    
    setModalState({
      title: movieFiltered.title,
      img: movieFiltered.images["Poster Art"].url,
      description: movieFiltered.description,
      releaseYear: movieFiltered.releaseYear,
    })
    setSeeModal(true)
  }

  
  return (
    <div className="movies-container">
      {
        (!validator && error) && <Error />
      }
      {
        (!validator && !error) && <Loader />
      }
      {
        (validator && !error) && movies.map(index =>(
          <CategoryCard
            filterToModal={filterToModal}
            title={index.title}
            img={index.images['Poster Art'].url}
            key={index.title}
          />
        ))}
        <Modal
        seeModal={seeModal}
        setSeeModal={setSeeModal}
        title={modalState.title}
        img={modalState.img}
        description={modalState.description}
        releaseYear={modalState.releaseYear}
      />
    </div>
  );
}
