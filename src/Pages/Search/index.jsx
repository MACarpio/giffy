import "./Search.css";
import { useTrendingGifs } from "../../Hooks/useGifs";
import ListGifs from "../../Components/Container/ListGifs/ListGifs";
import SelectList from "../../Components/Container/Trending/TrendingList";

export default function Search() {
  const gifs = useTrendingGifs();
  return (
    <>
      <div className="App-main">
        <div className="Search-ListGifs">
          <ListGifs gifs={gifs}></ListGifs>
        </div>
      </div>
      <div className="App-lateral">
        <SelectList></SelectList>
      </div>
    </>
  );
}
