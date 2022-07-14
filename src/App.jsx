import "./App.css";
import Home from "./Pages/Home/index";
import { Route } from "wouter";
import Result from "./Pages/Result/index";
import Navbar from "./Components/Simple/Navbar/Navbar";
import Search from "./Pages/Search/index";
function App() {
  return (
    <section className="App-header">
      <Navbar></Navbar>
      <Route path="/" component={Home} />
      <Route path="/Result/:keyword" component={Result} />
      <Route path="/Search" component={Search} />
    </section>
  );
}

export default App;
