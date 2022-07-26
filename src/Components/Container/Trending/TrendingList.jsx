import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import "./SelectList.css";
import { useTrendingSearches } from "../../../Hooks/useGifs";

function SelectList() {
  const searches = useTrendingSearches();
  return (
    <div className="SelectList-container">
      <div className="MasBuscadas">
        <h1 className="title-select">Trending</h1>

        <div className="listBusquedas">
          {searches.map((variables) => {
            return (
              <Link key={variables} to={`/Result/${variables}`}>
                <a className="link-search">{variables}</a>
              </Link>
            );
          })}
        </div>
      </div>
      <br />
    </div>
  );
}
export default function LazyTrending() {
  const [show, setShow] = useState(false);
  const elref = useRef();
  useEffect(() => {
    const onChange = (entries) => {
      console.log(entries);
      const al = entries[0];
      if (al.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });
    observer.observe(elref.current);
  });

  return (
    <div ref={elref} className="SelectList-container">
      {show ? <SelectList /> : null}
    </div>
  );
}
