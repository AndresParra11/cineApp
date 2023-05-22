import { CircularProgress, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Home.scss";

const Home = ({ movieList }) => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    if (!posters.length) {
      setTimeout(() => {
        const playNow = getPosters(movieList);
        setPosters(playNow);
      }, 900);
      /*       const playNow = getPosters(movieList);
      setPosters(playNow); */
    }
    console.log(posters);
  }, [movieList, posters]);

  const getPosters = (arrayMovies) => {
    const posters = arrayMovies.map((movie) => {
      const urlBase = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
      return {
        image: `${urlBase}${movie.poster_path}`,
        id: movie.id,
        title: movie.title,
      };
    });
    return posters;
  };

  return (
    <main className="main">
      <h1>Cartelera</h1>
      <p>Estas son todas las películas disponibles</p>
      <section className={posters.length ? "main__cards" : "main__spin"}>
        {posters.length ? (
          posters.map((poster) => (
            <figure key={poster.id}>
              <img src={poster.image} alt={poster.title} />
            </figure>
          ))
        ) : (
          <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
          </Stack>
        )}
      </section>
    </main>
  );
};

export default Home;
