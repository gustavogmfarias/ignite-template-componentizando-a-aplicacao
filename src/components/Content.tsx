import { useEffect, useState } from "react";
import { api } from "../services/api";

export function Content() {
  interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }
  const [movies, setMovies] = useState<MovieProps[]>([]);
  
  useEffect(() => {
  api
  .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
  .then((response) => {
    setMovies(response.data);
  })
  }