import React, { useEffect, useState } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { EditForm } from "../components/EditForm";
import { CargaExitosa } from "../components/CargaExitosa";
import { CargaFallida } from "../components/CargaFallida";
import "../styles/Movie.css";

const API = 'https://api-moviesandseries-canterasoftware.onrender.com/api/v1/movies';

export function Movies(props) {
  const [handleRequest, setHandleRequest] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [validator, setValidator] = useState(true);
  const [error, setError] = useState(false);
  const [seeModal, setSeeModal] = useState(false);
  const [modalState, setModalState] = useState({
    title: "",
    img: "",
    description: "",
    releaseYear: 0,
    id: null,
    category: null
  });

  const toggleForm = () => {
    setIsOpen(!isOpen);
    setSeeModal(false);
  };

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(response => {
        setMovies(response)
        setValidator(true);
        console.log(response)
      })
      .catch(e => {
        console.error(e);
        setError(true);
      });

  }, [handleRequest]);


  function filterToModal(title) {
    const movieFiltered = movies.find(movie => movie.title == title);

    setModalState({
      title: movieFiltered.title,
      img: movieFiltered.img,
      description: movieFiltered.description,
      releaseYear: movieFiltered.release_year,
      id: movieFiltered.id,
      category: movieFiltered.category
    });
    setSeeModal(true);
  }


  return (
    <div className={validator ? "movies-container" : "home-container"}>
      {
        (!validator && error) && <Error />
      }
      {
        (!validator && !error) && <Loader />
      }
      {
        (validator && !error) && movies.map(index => (
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
      {handleRequest.success && <CargaExitosa message={handleRequest.message} />}
      {handleRequest.failure && <CargaFallida message={handleRequest.message} />}
    </div>
  );
}
