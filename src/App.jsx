import "./App.css";
import Home from "./Pages/Home/index";
import { Route } from "wouter";
import Result from "./Pages/Result/index";
import Navbar from "./Components/Simple/Navbar/Navbar";
import Search from "./Pages/Search/index";
import { GifContextProvider } from "./Context/GifContext";
import Details from "./Pages/Details";
import Buscador from "./Components/Simple/Buscador/Buscador";

function App() {
  return (
    <section className="App">
      <Navbar></Navbar>
      <div className="App-buscador">
        <Buscador></Buscador>
      </div>
      <div className="App-body">
        <GifContextProvider>
          <Route path="/" component={Home} />
          <Route path="/Result/:keyword" component={Result} />
          <Route path="/Search" component={Search} />
          <Route path="/Details/:id" component={Details} />
        </GifContextProvider>
      </div>
    </section>
  );
}

export default App;
