import "./Search.css";
import { useTrendingGifs } from "../../Hooks/useGifs";
import ListGifs from "../../Components/Container/ListGifs/ListGifs";
import SelectList from "../../Components/Container/SelectList/SelectList";

export default function Search() {
  const gifs = useTrendingGifs();
  return (
    <>
      <section className="Search-header">
        <div className="Search-SelectList">
          <SelectList></SelectList>
        </div>
        <div className="Search-ListGifs">
          <ListGifs gifs={gifs}></ListGifs>
        </div>
      </section>
    </>
  );
}
