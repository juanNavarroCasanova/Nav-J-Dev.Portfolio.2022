import React from "react";
import "./portfolio.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Portfolio(props) {
  return (
    <div className="portfolio" id="portfolio">
      <div className="header">
        <h1>My Projects</h1>
      </div>
      <div className="introduction">
        <h2>
          I am a Freelance Developer Programmer from Spain based in Byron Bay -
          Australia, with experience using technologies such as ReactJS, Angular
          5/6, HTML5, CSS3, C# as well as building Mobile Applications for IOS,
          Android and Windows using Xamarin. I really enjoy learning new
          scripting languages and web tools that can help you to turn your
          ideas into sites and applications that can make a difference. These are my personal projects so
          far, my own portfolio and a Covid Tracker.{" "}
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
              <p>
                Responsive React portfolio website using functional components,
                React hooks, Sass preprocessor, git and EmailJS. Done with
                Visual Studio Code.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="item construction">
          <img src="/assets/covid.jpg" alt="Image of Covid app" />
          <div className="description">
            <h4>COVID Tracker</h4>
            <h3>Coming soon !!!</h3>
          </div>
        </div>
      </div>

      <div className="bottomContainer">
        <a href="#contact">
          <h3>Contact Page</h3>
          <div className="arrow">
            <KeyboardArrowDownIcon />
          </div>
        </a>
      </div>
    </div>
  );
}
