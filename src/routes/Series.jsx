import React, { useContext, useEffect, useState } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { Modal } from "../components/Modal";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import "../styles/Series.css"

const API = "https://213vgqlp-3000.brs.devtunnels.ms/api/v1/series";
export function Series() {
  const [series, setSeries] = useState([]);
  const [validator, setValidator] = useState(false)
  const [error, setError] = useState(false);
  const [seeModal, setSeeModal] = useState(false);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(response => {
        setSeries(response)
        setValidator(true)
        console.log(response)
      })
      .catch(e => {
        console.error(e);
        setError(true)
      })

  }, []);

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
      img: serieFiltered.img,
      description: serieFiltered.description,
      releaseYear: serieFiltered.release_year,
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
          img={index.img}
          key={index.id}
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
