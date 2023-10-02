import React, { useEffect, useState } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";

import { Modal } from "../components/Modal";

import "../styles/Movie.css";
const API = 'https://213vgqlp-3000.brs.devtunnels.ms/api/v1/movies';

export function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [ validator, setValidator ] = useState(false);
  const [error, setError] = useState(false);

  // async function filterMovies(res) {
  //   const moviesData = await res.filter(item => (item.release_year >= 2010));
  //   setMovies(moviesData);
  //   setValidator(true);
  //   console.log(movies)
  // }
  useEffect(()=>{
    fetch(API)
    .then(res=>res.json())
    .then(response=>{
      console.log(response);
      // filterMovies(response);
    })
    .catch(e=>{
      console.error(e);
      setError(true);
    });

  }, []);

  const [seeModal, setSeeModal] = useState(false);

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
      img: movieFiltered.img,
      description: movieFiltered.description,
      releaseYear: movieFiltered.release_year,
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
        (validator && !error) && movies.map(index =>(
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
