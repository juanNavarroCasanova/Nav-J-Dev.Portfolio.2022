import React from "react";
import "./portfolio.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Portfolio(props) {
  return (
    <div className="portfolio" id="portfolio">
      <div className="header">My projects</div>
      <div className="introduction">
        <h2>
          I am a Software Developer from Spain based in Australia, with
          experience using technologies such as ReactJS, Angular 5/6, HTML5,
          CSS3, C# as well as building Mobile Applications for IOS, Android and
          Windows using Xamarin. I really enjoy learning new scripting languages
          and web tools. These are my personal projects so far, my own portfolio
          and a Covid Tracker, which will be done by the end of January 2022.{" "}
        </h2>
      </div>
      <div className="container">
        <div className="item">
          <img src="/assets/web.png" alt="Image of website background" />
          <div className="description">
            <div className="button">
              <a
                href="https://github.com/juanNavarroCasanova/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
            </div>
            <div className="details">
              <h4>
                Responsive React portfolio website using functional components,
                React hooks, Sass preprocessor, git and EmailJS. Done with
                Visual Studio Code.{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="item construction">
          <img src="/assets/covid.jpg" alt="Image of Covid app" />
          <div className="description">
            <h3>COVID Tracker</h3>
            <h2>Coming soon !!!</h2>
          </div>
        </div>
      </div>

      <div className="bottomContainer">
        <a href="#works">
          <h3>Work Experience</h3>
          <div className="arrow">
            <KeyboardArrowDownIcon />
          </div>
        </a>
      </div>
    </div>
  );
}
