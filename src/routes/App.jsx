//Importación del contexto
import { DataContextProvider } from "../dataContext/DataContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Movies } from "./Movies";
import { Series } from "./Series";
import { Header } from "../components/Header";

export function App() {
  return (
    <BrowserRouter>
    <DataContextProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/series" element={<Series />}/>
      </Routes>
    </DataContextProvider>
    </BrowserRouter>
  )
}

