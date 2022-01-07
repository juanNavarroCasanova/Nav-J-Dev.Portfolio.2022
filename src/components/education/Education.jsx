import React from "react";
import "./education.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Education() {
  const data = [
    {
      id: 1,
      provider: "Southern Cross University.",
      location: "Gold Coast - Australia.",
      course: "Bachelor of Information Technology.",
      major: "Major in Software Development.",
      date: "July 2015 to July 2017.",
      units: [
        "- Foundations of Computing.",
        "- Web Development I & II.",
        "- Systems Analysis and Design.",
        "- Programming I & II",
        "- Data Communications and Networks",
        "- Database Systems.",
        "- Object Oriented Programming.",
        "- Programming Mobile Systems.",
      ],
    },
    {
      id: 2,
      provider: "Tafe Queensland.",
      location: "Gold Coast - Australia.",
      course: "Diploma of IT.",
      major: "Major in Software Development.",
      date: "July 2013 to July 2015.",
      units: [
        "- Design a database.",
        "- Integrate database with a website.",
        "- Apply intermediate & advanced programming skills in another language.",
        "- Apply intermediate & advanced object-oriented language skills.",
        "- Apply testing techniques for software development.",
        "- Create web-based programs.",
        "- Gather data to identify business requirements.",
      ],
    },
  ];

  return (
    <div className="education" id="education">
      <div className="title">
        <h1>Education.</h1>
      </div>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className="card">
            <div className="top">
              <h1>{d.course}</h1>
              <h2>{d.major}</h2>
              <h3>{d.date}</h3>
            </div>
            <div className="center">
            <div className="units">
              <h2>Units</h2>
            </div>
            <div className="info">
            <ul>
                {d.units.map((unit) => {
                  return <li>{unit}</li>;
                })}
              </ul>
            </div>
            </div>
            <div className="bottom">
              <h1>{d.provider}</h1>
              <h2>{d.location}</h2>
            </div>
          </div>
        ))}
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
