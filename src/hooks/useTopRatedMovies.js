import { useDispatch } from "react-redux";
import { Api_Options } from "../utils/constants";
import { useEffect } from "react";
import {addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      Api_Options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};
export default useTopRatedMovies;
