import React, { useState } from "react";
import { useLocation } from "wouter";
import "./Buscador.css";

export default function Buscador() {
  const [path, setPath] = useLocation([]);
  const [search, setSearch] = useState("");

  function handleChange(e) {
    e.preventDefault();
    search.length > 0 ? setPath("/Result/" + search) : setPath("/Search");
  }
  const setKeyword = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="form-buscador">
      <h1>Buscar</h1>
      <form onSubmit={handleChange}>
        <input
          type="text"
          onChange={setKeyword}
          placeholder="Buscar"
          value={search}
        />
        <button>Buscar </button>
      </form>
    </div>
  );
}
