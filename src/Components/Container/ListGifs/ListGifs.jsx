import React, { useEffect, useState } from "react";
import { getSearchGifs } from "../../../Services/getGifs";
import Gif from "../../Simple/Gif/Gif";
import "./ListGifs.css";

export default function ListGifs({ gifs, title }) {
  return (
    <div>
      <h1 className="list-title">{title}</h1>
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
