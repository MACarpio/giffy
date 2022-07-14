import SelectList from "../../Components/Container/SelectList/SelectList.jsx";
import { useTrendingGifs } from "../../Hooks/useGifs.jsx";
import "../../App.css";

export default function Home() {
  return (
    <div className="App">
      <section className="App-header">
        <div className="App-SelectList">
          <SelectList></SelectList>
        </div>
      </section>
    </div>
  );
}
