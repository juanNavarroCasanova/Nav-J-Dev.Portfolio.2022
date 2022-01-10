import React from "react";
import "./works.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Works() {
  const data = [
    {
      id: "efficiencyLeaders",
      title: "Efficiency Leaders",
      website: "https://www.efficiencyleaders.com.au/",
      roles: [
        "Adding and testing of features and bug fixes to the Rapid product.",
        "Analyse bug reports from users and fixing them.",
        "Modify Controllers and Models when was required with C#.",
        "Use of git and git-flow for product develop version control.",
        "Adding and modifying components using typescript and Angular 6/7.",
      ],
      product: "Rapid AP.",
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
        "Adding new features and improvement of layout of mobile App.",
        "Testing new changes & updates on Mobile App.",
        "Xamarin Forms – Cross Platform (Win-IOS- Android).",
        "Release of Mobile App (Win-Android-IOS).",
        "Analyse bug reports from users and fixing them.",
      ],
      product: "Agtrix Farming Mobile App",
      tools: "Xamarin, CSS 3, HTML 5, C#, Visual Studio.",
      date: "May 2016 - February 2017.",
      role: "Front-end Developer.",
    },
  ];

  return (
    <div className="works" id="works">
      <div className="title">
        <h1>Work Experience</h1>
      </div>
      {data.map((d) => (
        <div key={d.id} className="container">
          <div className="item">
            <div className="header">
              <div className="top">
                <div className="head">
                  <h2>{d.title}</h2>
                </div>
                <div className="button">
                  <a href={d.website} target="_blank" rel="noopener noreferrer">
                    Website
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="top">
                  <div className="product">
                    <h2>{d.product}</h2>
                  </div>
                  <div className="position">
                    <div className="role">
                      <h2>{d.role}</h2>
                    </div>
                    <div className="date">
                      <h3>{d.date}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="responsabilities">
                <h4>Roles and Responsabilities</h4>
              </div>
              <div className="details">
                <ul>
                  {d.roles.map((role) => {
                    return <li key={role}>{role}</li>;
                  })}
                </ul>
              </div>
              <div className="bottom">
                <div className="tools">
                  <h4>Tools - Technologies</h4>
                </div>
                <div className="details">
                  <h3>{d.tools}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="bottomContainer">
        <a href="#education">
          <div className="arrow">
            <KeyboardArrowDownIcon style={{ fontSize: 70 }}/>
          </div>
        </a>
      </div>
    </div>
  );
}
