import React, { useContext } from "react";
import GifContext from "../../Context/GifContext";
import Gif from "../../Components/Simple/Gif/Gif";
import "./Details.css";

export default function Details({ params }) {
  const { gifs } = useContext(GifContext);
  const gif = gifs.find((singleGif) => {
    return singleGif.id === params.id;
  });
  console.log(gif);
  return (
    <div className="Details-container">
      <div className="Single-Gif">
        <Gif title={gif.title} key={gif.id} url={gif.url} id={gif.id} />
      </div>
    </div>
  );
}
