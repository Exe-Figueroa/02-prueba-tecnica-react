import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const API = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

const DataContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [validator, setValidator] = useState(false);

  function filterMovies(res) {
    const moviesData = res.filter(item => (item.programType === 'movie' && item.releaseYear >= 2010));
    setMovies(moviesData);
  }
  function filterSeries(res) {
    const seriesData = res.filter(item => (item.programType === 'movie' && item.releaseYear >= 2010));
    setSeries(seriesData);
  }
  
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(res => {
        filterMovies(res.entries);
        filterSeries(res.entries);
        setValidator(true)
      });
  }, []);

  return (
    <DataContext.Provider value={{ series, movies, validator }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
