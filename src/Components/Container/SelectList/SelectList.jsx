import React, { useState } from "react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import "./SelectList.css";
export default function SelectList() {
  const [search, setSearch] = useState("");
  const [path, setPath] = useLocation();
  const buscar = (e) => {
    e.preventDefault();
    search.length > 0 ? setPath("/Result/" + search) : setPath("/Search");
  };
  const cambioKeyword = (e) => {
    setSearch(e.target.value);
  };
  const Variables = [
    "Panda",
    "Carrera",
    "Peru",
    "Sexy",
    "Computing",
    "Avengers",
  ];
  return (
    <>
      <div className="MasBuscadas">
        <h1 className="title-select">Mas Buscadas</h1>
        <div className="listBusquedas">
          {Variables.map((variables) => {
            return (
              <Link key={variables} to={`/Result/${variables}`}>
                <a className="link-search">{variables}</a>
              </Link>
            );
          })}
        </div>
      </div>
      <br />
      <div className="busqueda">
        <h1> Buscar </h1>
        <form className="select-form" onSubmit={buscar}>
          <input
            onChange={cambioKeyword}
            type="text"
            value={search}
            nullValue={"random"}
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </>
  );
}
