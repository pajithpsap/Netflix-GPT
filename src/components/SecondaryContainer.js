import React from "react";

import MovieList from "./MovieList.js";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  //useNowPlayingMovies();
  const movies = useSelector((store) => store.movies);
  //console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-40 relative z-20 pl-12">
          <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
