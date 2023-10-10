import React, { useContext, useEffect, useState } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { Modal } from "../components/Modal";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import "../styles/Series.css"
import { EditForm } from "../components/EditForm";
import { CargaExitosa } from "../components/CargaExitosa";
import { CargaFallida } from "../components/CargaFallida";

const API = "https://api-moviesandseries-canterasoftware.onrender.com/api/v1/series";

export function Series(props) {
  const [handleRequest, setHandleRequest] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [series, setSeries] = useState([]);
  const [validator, setValidator] = useState(false)
  const [error, setError] = useState(false);
  const [seeModal, setSeeModal] = useState(false);
  const [modalState, setModalState] = useState({
    title: "",
    img: "",
    description: "",
    releaseYear: 0,
    id: null,
    category: null,
  });

  const toggleForm = () => {
    setIsOpen(!isOpen);
    setSeeModal(false);
  };

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(response => {
        setSeries(response)
        setValidator(true)
      })
      .catch(e => {
        setError(true)
      })
  }, [handleRequest]);

  function filterToModal(title) {
    const serieFiltered = series.find(serie => serie.title == title);

    setModalState({
      title: serieFiltered.title,
      img: serieFiltered.img,
      description: serieFiltered.description,
      releaseYear: serieFiltered.release_year,
      id: serieFiltered.id,
      category: serieFiltered.category,
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
      {seeModal && <Modal
        seeModal={seeModal}
        setSeeModal={setSeeModal}
        title={modalState.title}
        img={modalState.img}
        description={modalState.description}
        releaseYear={modalState.releaseYear}
        id={modalState.id}
        category={modalState.category}
        toggleForm={toggleForm}
      />}
      {isOpen &&
        <EditForm
          modalState={modalState}
          toggleForm={toggleForm}
          setHandleRequest={setHandleRequest}
        />}
      {handleRequest.success && <CargaExitosa />}
      {handleRequest.failure && <CargaFallida />}
    </div>
  );
}
