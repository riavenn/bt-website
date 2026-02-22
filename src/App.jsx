import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Team from "./pages/Team/Team";
import SocialMediaAndDesign from "./pages/Departmens/SocialMediaAndDesign/SocialMediaAndDesign";
import ProjectAndTraining from "./pages/Departmens/ProjectAndTraining/ProjectAndTraining";
import EventAndOrganization from "./pages/Departmens/EventAndOrganization/EventAndOrganization";
import HumanResources from "./pages/Departmens/HumanResources/HumanResources";
import Sponsorship from "./pages/Departmens/Sponsorship/Sponsorship";
import TeamLayout from "./pages/Departmens/TeamLayout/TeamLayout";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import GameJam2026 from "./pages/GameJam2026/GameJam2026";
import Management from "./pages/Departmens/Management/Management";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/etkinlikler" element={<Events />} />
        <Route path="/departmanlar" element={<Team />} />
        <Route path="/akdenizgamejam2026" element={<GameJam2026 />} />

        <Route path="/departmanlar" element={<TeamLayout />}>
          <Route path="yonetim-kurulu" element={<Management />} />
          <Route
            path="sosyal-medya-ve-tasarim"
            element={<SocialMediaAndDesign />}
          />
          <Route path="proje-ve-egitim" element={<ProjectAndTraining />} />
          <Route
            path="etkinlik-ve-organizasyon"
            element={<EventAndOrganization />}
          />
          <Route path="insan-kaynaklari" element={<HumanResources />} />
          <Route path="sponsorluk" element={<Sponsorship />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
