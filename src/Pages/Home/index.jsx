import Lazytrending from "../../Components/Container/Trending/TrendingList.jsx";
import "../../App.css";
import { Route } from "wouter";
import { GifContextProvider } from "../../Context/GifContext";
import Search from "../Search/index";
import Details from "../Details/index";
import Result from "../Result/index";

export default function Home() {
  return (
    <>
      <div className="App-main">Home Page</div>
      <div className="App-lateral">
        <Lazytrending></Lazytrending>
      </div>
    </>
  );
}
