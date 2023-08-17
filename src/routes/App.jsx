
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Movies } from "./Movies";
import { Series } from "./Series";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/series" element={<Series />}/>
      </Routes>
    </BrowserRouter>
  )
}

