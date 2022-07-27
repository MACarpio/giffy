import React from "react";
import ListGifs from "../../Components/Container/ListGifs/ListGifs";
import SelectList from "../../Components/Container/Trending/TrendingList";
import { useSearchGifs } from "../../Hooks/useGifs";
import "./Result.css";

export default function Result({ params }) {
  const keyword = params.keyword;
  const { gifs, title } = useSearchGifs({ keyword });
  return (
    <>
      <div className="App-main">
        <div className="Result-ListGifs">
          <ListGifs gifs={gifs} title={title}></ListGifs>
        </div>
      </div>
      <div className="App-lateral">
        <SelectList></SelectList>
      </div>
    </>
  );
}
