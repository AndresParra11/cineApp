import { CircularProgress, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import { searchParamsContext } from "../../Routes/AppRouter";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Home = ({ movieList }) => {
  const navigate = useNavigate();

  const [posters, setPosters] = useState([]);

  const { ubication, cines, date, setFilters } =
    useContext(searchParamsContext);

  useEffect(() => {
    if (!posters.length) {
      setTimeout(() => {
        const playNow = getPosters(movieList);
        setPosters(playNow);
      }, 900);
      /*       const playNow = getPosters(movieList);
      setPosters(playNow); */
    }
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

  const handleNavegateDetails = (idMovie, titleMovie) => {
    if (!ubication || !cines || !date) {
      Swal.fire("Oopss!", "No has completado todos los datos", "error");
    } else {
      const params = {
        ubication,
        cines,
        date,
        idMovie,
      };
      setFilters(params);
      Swal.fire("Good job!", "Has seleccionado una función!", "success");
      sessionStorage.setItem("searchParams", JSON.stringify(params));
      navigate(`/${titleMovie}`);
    }
  };

  return (
    <main className="main">
      <h1>Cartelera</h1>
      <p>Estas son todas las películas disponibles</p>
      <section className={posters.length ? "main__cards" : "main__spin"}>
        {posters.length ? (
          posters.map((poster) => (
            <figure key={poster.id}>
              <img
                src={poster.image}
                alt={poster.title}
                onClick={() => handleNavegateDetails(poster.id, poster.title)}
              />
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
