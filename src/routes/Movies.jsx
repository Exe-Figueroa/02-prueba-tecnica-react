import React, { useEffect, useState } from "react";

import { CategoryCard } from "../components/CategoryCard";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { EditForm } from "../components/EditForm";

import "../styles/Movie.css";
const API = 'https://213vgqlp-3000.brs.devtunnels.ms/api/v1/movies';

export function Movies(props) {
  const [isOpen, setIsOpen] = useState(false);

  const moviesData = [
    {
      id: 1,
      title: "peli 1",
      img: "url",
      description: "lremapdmapiwndansdoasnasidnasindoaisd",
      releaseYear: 2023,
    },
    {
      id: 2,
      title: "peli 2",
      img: "",
      description: "lalalala",
      releaseYear: 2022,
    },
    {
      id: 3,
      title: "peli 3",
      img: "",
      description: "ajgjajg",
      releaseYear: 2021,
    },
    {
      id: 4,
      title: "peli 4",
      img: "",
      description: "laldaf",
      releaseYear: 2020,
    },
  ]
  const [movies, setMovies] = useState(moviesData);
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

  }, []);



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
    console.log(modalState)
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
      <Modal
        seeModal={seeModal}
        setSeeModal={setSeeModal}
        title={modalState.title}
        img={modalState.img}
        description={modalState.description}
        releaseYear={modalState.releaseYear}
        id={modalState.id}
        category={modalState.category}
        toggleForm={toggleForm}
      />
      {isOpen &&
        <EditForm
          modalState={modalState}
        />}
    </div>
  );
}
