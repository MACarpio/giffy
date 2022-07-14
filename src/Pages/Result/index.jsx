import React from "react";
import ListGifs from "../../Components/Container/ListGifs/ListGifs";
import SelectList from "../../Components/Container/SelectList/SelectList";
import { useSearchGifs } from "../../Hooks/useGifs";
import "./Result.css";

export default function Result({ params }) {
  const keyword = params.keyword;
  const { gifs, title } = useSearchGifs({ keyword });
  return (
    <>
      <section className="Result-header">
        <div className="Result-SelectList">
          <SelectList></SelectList>
        </div>
        <div className="Result-ListGifs">
          <ListGifs gifs={gifs} title={title}></ListGifs>
        </div>
      </section>
    </>
  );
}
