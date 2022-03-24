import React from "react";
import "./portfolio.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Portfolio(props) {
  return (
    <div className="portfolio" id="portfolio">
      <div className="header">
        <h1>Portfolio</h1>
      </div>
      <div className="introduction">
        <h2>
          I am a Front-end Software Developer with experience using Angular 5/6,
          HTML5, CSS3,C# technologies. Moreover, I was a part of the development
          team (have contributed on the development of) for Mobile Applications
          for IOS and Android using Xamarin.<br /><br />I do enjoy learning new programing
          languages and web tools. For instance, I have been working on pet
          projects using high-end libraries/languages such as ReactJS, Bootstrap
          (with SASS), and GIT. Furthermore, I have also accepted proposals from
          local businesses and individuals to build applications for different
          purposes using my own code on different Ecommerce and Bookings
          frameworks; moreover, I took advantaged of this acquired knowledge to
          develop them.<br /><br /> Working at the moment on my own projects on React and as
          a freelancer improving CMS performance and creating new personalised
          features. I’m open to having discussions about any opportunities to
          grow to be part of a great team of developers.{" "}
        </h2>
      </div>
      <div className="container">
        <div className="item">
          <img src="/assets/laptop.png" alt="Website background" />
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
          <img src="/assets/covid.jpg" alt="Covid app" />
          <div className="description">
            <h4>COVID Tracker</h4>
            <h3>Coming soon !!!</h3>
          </div>
        </div>
      </div>

      <div className="bottomContainer">
        <a href="#works">
          <div className="arrow">
            <KeyboardArrowDownIcon style={{ fontSize: 70 }} />
          </div>
        </a>
      </div>
    </div>
  );
}
