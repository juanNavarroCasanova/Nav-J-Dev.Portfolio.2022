import React from 'react';
import './education.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Education() {

    const data = [
        {
            id: 1,
            course:"Bachelor of Information Technology",
            major:"Major in Software Development",
            logo:"assets/sc.PNG",
            date:"July 2015 to July 2017",
            units:[
                "- Foundations of Computing.",
                "- Web Development I & II.",
                "- Systems Analysis and Design",
                "- Programming I & II",
                "- Data Communications and Networks",
                "- Database Systems.",
                "- Object Oriented Programming.",
                "- Programming Mobile Systems.",
            ]
        },
        {
            id: 2,
            course:"Diploma of Information Technology",
            major:"Major in Software Development",
            logo:"/assets/tafe-qld.PNG",
            date:"July 2013 to July 2015",
            units:[
                "- Design a database.",
                "- Integrate database with a website.",
                "- Apply intermediate & advanced programming skills in another language.",
                "- Apply intermediate & advanced object-oriented language skills.",
                "- Apply testing techniques for software development.",
                "- Create web-based programs.",
                "- Gather data to identify business requirements.",
            ]
        },
    ];

    return (
        <div className="education" id="education">
            <div className="container">
            {data.map((d) => (
                <div key={d.id} className="card">
                    <div className="top">
                        <img src={d.logo} alt=""/>
                    </div>
                    <div className="center">
                        <ul>
                            {d.units.map((unit) =>{
                                return(
                                    <li>{unit}</li>
                                )})
                            }
                        </ul>  		
                    </div>
                    <div className="bottom">
                        <h2>{d.course}</h2>
                        <h3>{d.major}</h3>
                        <h4>{d.date}</h4>
                    </div>
                </div>
            ))}
            </div>
            <div className="bottomContainer">
                    <a href="#contact">
                        <h3>Contact Page</h3>
                        <div className="arrow">
                            <KeyboardArrowDownIcon/>
                        </div>
                    </a>
            </div> 
            
        </div>
    )
}
