import { useState, useEffect } from "react";
import { getSearchGifs, getTrendingGifs } from "../Services/getGifs";

export function useSearchGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getSearchGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
    });
  }, [keyword]);
  return { gifs, title: keyword };
}

export function useTrendingGifs() {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getTrendingGifs().then((gifs) => {
      setGifs(gifs);
    });
  }, []);
  return gifs;
}
