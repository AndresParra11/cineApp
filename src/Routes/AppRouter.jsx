import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Home/Home";
import DetalleFuncion from "../Components/DetalleFuncion/DetalleFuncion";
import SeleccionBoletos from "../Components/SeleccionBoletos/SeleccionBoletos";
import SeleccionAsientos from "../Components/SeleccionAsientos/SeleccionAsientos";
import PagoBoletos from "../Components/PagoBoletos/PagoBoletos";
import TransaccionExitosa from "../Components/TransaccionExitosa/TransaccionExitosa";
import Tickets from "../Components/Tickets/Tickets";
import NotFound from "../Components/NotFound/NotFound";
import { getMovies } from "../services/getMovies";

const AppRouter = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length === 0) {
      getCurrentMovies();
    }
  }, [movies]);

  const getCurrentMovies = async () => {
    const allMovies = await getMovies();
    setMovies(allMovies.results);
  };

  return (
    <div>
      <BrowserRouter>
        {/* Siempre para iniciar las rutas. */}
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home movieList={movies} />} />
            {/* Ruta dinámica porque en este componente se va a renderizar cualquier película que se escoja. */}
            <Route path={":pelicula"} element={<DetalleFuncion />}>
              <Route path={"boletos"} element={<SeleccionBoletos />} />
              <Route path={"asientos"} element={<SeleccionAsientos />} />
              <Route path={"pagos"} element={<PagoBoletos />} />
              <Route
                path={"transaccionExitosa"}
                element={<TransaccionExitosa />}
              />
              <Route path={"entradas"} element={<Tickets />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
