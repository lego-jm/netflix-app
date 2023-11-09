import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

export default function MovieSlide({ movies }) {
  const { results } = movies;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        focusOnSelect={true}
        infinite={true}
      >
        {results &&
          results.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </Carousel>
    </>
  );
}
