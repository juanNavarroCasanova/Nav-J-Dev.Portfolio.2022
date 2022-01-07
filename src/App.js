import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Education from "./components/education/Education";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import OutsideClickHandler from "react-outside-click-handler";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Education />
        <Works />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
