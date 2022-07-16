import { useState, useEffect } from "react";
import { getSearchGifs, getTrendingGifs } from "../Services/getGifs";

export function useSearchGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    const useKeyword = keyword || localStorage.getItem("ultimaBusqueda");
    getSearchGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      localStorage.setItem("ultimaBusqueda", keyword);
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
