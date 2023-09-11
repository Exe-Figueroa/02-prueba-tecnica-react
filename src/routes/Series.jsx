import React, { useContext, useState } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { DataContext } from "../dataContext/DataContext";
import { Modal } from "../components/Modal";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import "../styles/Series.css"

export function Series() {
  const { error, validator, series } = useContext(DataContext);
  const [seeModal, setSeeModal] = useState(false);
  //Estado compuesto un objeto con propiedades no inicializadas
  const [modalState, setModalState] = useState({
    title: "",
    img: "",
    description: "",
    releaseYear: 0,
  });

  function filterToModal(title) {
    const serieFiltered = series.find(serie => serie.title == title);

    setModalState({
      title: serieFiltered.title,
      img: serieFiltered.images["Poster Art"].url,
      description: serieFiltered.description,
      releaseYear: serieFiltered.releaseYear,
    })
    setSeeModal(true);
  }

  return (
    <div className={validator ? "series-container" : "home-container"}>
      {
        (!validator && error) && <Error />
      }
      {
        (!validator && !error) && <Loader />
      }

      {(validator && !error) && series.map(index => (
        <CategoryCard
          filterToModal={filterToModal}
          title={index.title}
          img={index.images["Poster Art"].url}
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
