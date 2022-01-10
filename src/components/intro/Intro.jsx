import React from "react";
import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 2000,
      backSpeed: 60,
      showCursor: true,
      cursorChar: "|",
      strings: [
        "React JS",
        "Angular",
        ".Net",
        "Wordpress",
        "Bootstrap",
        "SASS",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        <div className="description">
          <h2>Hi There, I'm</h2>
          <h1>Juan Navarro Casanova</h1>
          <h3>Developer Programmer.</h3>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <div className="bottomContainer">
          <a href="#portfolio">
            <div className="arrow">
              <KeyboardArrowDownIcon style={{ fontSize: 70 }}/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
