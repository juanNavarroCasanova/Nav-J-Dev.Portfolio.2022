import React, { useState } from "react";
import "./works.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "efficiencyLeaders",
      title: "Efficiency Leaders",
      website: "https://www.efficiencyleaders.com.au/",
      roles: [
        "- Adding and testing of features and bug fixes to the Rapid product.",
        "- Analyse bug reports from users and fixing them.",
        "- Modify Controllers and Models when was required with C#.",
        "- Use of git and git-flow for product develop version control processes.",
        "- Adding and modifying components using typescript and Angular 6/7.",
      ],
      product: "Rapid AP - Accounts payable automation solution",
      tools:
        "Typescript, Node.js, Angular 7, CSS 3, SASS, HTML 5, Git, Typescript, C#, .NET, Visual Studio.",
      date: "November 2017 - December 2018.",
      role: "Front-end Developer.",
    },
    {
      id: "agtrix",
      title: "Agtrix",
      website: "https://www.agtrix.com/",
      roles: [
        "- Adding new features and improvement of layout of mobile App.",
        "- Testing new changes & updates on Mobile App.",
        "- Xamarin Forms – Cross Platform (Win-IOS- Android).",
        "- Release of Mobile App (Win-Android-IOS).",
        "- Analyse bug reports from users and fixing them.",
      ],
      product: "Agtrix Farming Mobile App",
      tools:
        "Xamarin, CSS 3, HTML 5, C#, Visual Studio.",
      date: "May 2016 - February 2017.",
      role: "Front-end Developer.",
    },
  ];

  const handleClick = (direction) => {
    direction === "left" ? setCurrentSlide(0) : setCurrentSlide(1);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
            <div className="item">
              <div className="top">
                <div className="title">
                  <p>{d.title}</p>
                </div>
                <div className="button">
                  <a href={d.website} target="_blank" rel="noopener noreferrer">
                    View Website
                  </a>
                </div>
              </div>
              <div className="info">
                <h2>{d.product}</h2>
                <h3>
                  {d.role} {d.date}
                </h3>
                <h4>Roles and Responsabilities</h4>
                <ul>
                  {d.roles.map((role) => {
                    return <li>{role}</li>;
                  })}
                </ul>

                <h4>Tools - Technologies</h4>
                <p>{d.tools}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow right">
        {currentSlide === 0 ? (
          <ArrowForwardIosIcon
            style={{ fontSize: 50, opacity: 0.5, color: "whitesmoke" }}
            onClick={() => handleClick("")}
          />
        ) : null}
      </div>
      <div className="arrow left">
        {currentSlide === 1 ? (
          <ArrowBackIosIcon
            style={{ fontSize: 50, opacity: 0.5, color: "whitesmoke" }}
            onClick={() => handleClick("left")}
          />
        ) : null}
      </div>
      <div className="bottomContainer">
        <a href="#education">
          <h3>Education</h3>
          <div className="arrow">
            <KeyboardArrowDownIcon />
          </div>
        </a>
      </div>
    </div>
  );
}
