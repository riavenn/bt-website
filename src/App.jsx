import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Team from "./pages/Team/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hakkimizda" element={<About />}></Route>
        <Route path="/etkinlikler" element={<Events />}></Route>
        <Route path="/ekip" element={<Team />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
