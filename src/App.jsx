import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Movies } from "./routes/Movies";
import { Series } from "./routes/Series";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
