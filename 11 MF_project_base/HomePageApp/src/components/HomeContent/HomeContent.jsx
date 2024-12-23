import React, { useEffect, useState, Suspense } from "react";
import QuickBooking from "../QuickBooking/QuickBooking.jsx";
const MovieCard = React.lazy(() => import("react_components/MovieCard"));
import "./HomeContent.scss";

// Array con un elemento de película ficticio para inicializar el estado
const dummyItem = [{name:"Dummy Movie"}]

// Componente principal que recibe props como parámetro
const HomeContent = (props) => {
  // Estado para almacenar la lista de películas, inicializado con dummyItem
  const [movies, setMovies] = useState(dummyItem);

  // Hook useEffect que se ejecuta al montar el componente
  useEffect(async () => {
    // Realiza una petición GET a la API para obtener las películas
    const response = await fetch("http://localhost:5555/movies");
    // Convierte la respuesta a formato JSON
    const data = await response.json();
    // Muestra los datos en consola
    console.log(data);
    setMovies(data);
  }, []); // Array vacío indica que solo se ejecuta al montar

  // Función que maneja el click en una película
  const movieClicked = (item) => {
    // Verifica si existe la función movieClicked en props
    if (typeof props.movieClicked === "function") {
      // Llama a la función pasando la película seleccionada
      props.movieClicked(item);
    }
  };

  // Función que renderiza la lista de películas
  const renderMovieList = () => {
    // Mapea el array de películas a elementos JSX
    let items = movies.map((item) => {
      return (
        // Contenedor con evento onClick y key única
        <div onClick={() => movieClicked(item)} key={item.name}>
          <div>Load the cards Here</div>
          <Suspense fallback={null}>
            <MovieCard title={item.name} imageUrl={item.imageUrl} />
          </Suspense>
        </div>
      );
    });

    // Retorna el array de elementos JSX
    return items;
  };

  // Renderiza el contenido principal
  return (
    // Contenedor principal con clase CSS
    <div className="home-content-container">
      {/* Componente para reserva rápida */}
      <QuickBooking></QuickBooking>
      {/* Contenedor de películas */}
      <div className="movies-container">
        {/* Renderiza la lista de películas */}
        {renderMovieList()}
      </div>
    </div>
  );
};

export default HomeContent;
