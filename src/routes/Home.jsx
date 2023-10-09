import React, { useState } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { NewForm } from "../components/NewForm";
import { CargaExitosa } from "../components/CargaExitosa.jsx";
import { CargaFallida } from "../components/CargaFallida.jsx";

import "../styles/Home.css";


const imgMovies = "https://media.istockphoto.com/id/1191001701/photo/popcorn-and-clapperboard.jpg?s=612x612&w=0&k=20&c=iUkFTVuU8k-UCcZDxczTWs6gkRa0nAMihp2Jf_2ASKM=";

const imgSeries = "https://www.latercera.com/resizer/gXOdyP_YUsjQ2MC6U9sUOv-gRxk=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/ONNUKFN3SNHK7F4KEH2BXHHHUA.jpg";


export function Home() {
  const [handlerRequest, setHandleRequest] = useState({})
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className="home-container">
      <CategoryCard img={imgSeries} title={"Popular Series"} name={"SERIES"} />
      <CategoryCard img={imgMovies} title={"Popular Movies"} name={"MOVIES"} />
      <button className="home-add"
        onClick={() => toggleForm()}>+</button>
      {isOpen && <NewForm setHandleRequest={setHandleRequest} toggleForm={toggleForm} />}
      {handlerRequest.success && <CargaExitosa />}
      {handlerRequest.failure && <CargaFallida />}
      {/* <CargaExitosa />
      <CargaFallida /> */}


    </div>
  );

}
