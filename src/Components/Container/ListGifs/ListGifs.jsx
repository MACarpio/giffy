import React from "react";
import Gif from "../../Simple/Gif/Gif";
import "./ListGifs.css";

export default function ListGifs({ gifs, title }) {
  return (
    <div>
      {title != undefined ? (
        <h1 className="list-title">{decodeURI(title)}</h1>
      ) : null}
      <div className="container-list">
        {gifs.map((gif) => {
          return (
            <Gif title={gif.title} key={gif.id} url={gif.url} id={gif.id} />
          );
        })}
      </div>
    </div>
  );
}
