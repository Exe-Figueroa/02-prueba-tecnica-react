import React, { useContext, useState } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { DataContext } from "../dataContext/DataContext";
import { Modal } from "../components/Modal";
import "../styles/Series.css"

export function Series() {
  const { validator, series } = useContext(DataContext);
  const [seeModal, setSeeModal] = useState(false)
  /*  console.log(series) */
  //Estado compuesto un objeto con propiedades no inicializadas
  const [modalState, setModalState] = useState({
    title: "",
    img: "",
    description: "",
    releaseYear: 0,
  });
  /* console.log({ series, modalState }); */

  function filterToModal(title) {
    const serieFiltered = series.find(serie => serie.title == title);
    console.log({ serieFiltered });
    setModalState({
      title: serieFiltered.title,
      img: serieFiltered.images["Poster Art"].url,
      description: serieFiltered.description,
      releaseYear: serieFiltered.releaseYear,
    })
    setSeeModal(true)
  }

  return (
    <div className="series-container">
      {series.map(index => (
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
