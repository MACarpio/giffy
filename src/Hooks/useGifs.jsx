import { useState, useEffect, useContext } from "react";
import { getSearchGifs, getTrendingGifs } from "../Services/getGifs";
import getTrendingSearch from "../Services/getTrendingSearch";
import GifContext from "../Context/GifContext";

export function useSearchGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifContext);
  useEffect(() => {
    const useKeyword = keyword || localStorage.getItem("ultimaBusqueda");
    getSearchGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      localStorage.setItem("ultimaBusqueda", keyword);
    });
    console.log(keyword);
  }, [keyword]);
  return { gifs, title: keyword };
}

export function useTrendingGifs() {
  const { gifs, setGifs } = useContext(GifContext);
  useEffect(() => {
    getTrendingGifs().then((gifs) => {
      setGifs(gifs);
    });
  }, []);
  return gifs;
}

export function useTrendingSearches() {
  const [searches, setSearches] = useState([]);
  useEffect(() => {
    getTrendingSearch().then((searches) => {
      setSearches(searches);
    });
  }, []);
  return searches;
}
