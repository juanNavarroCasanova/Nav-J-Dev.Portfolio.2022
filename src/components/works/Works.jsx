import React, { useState } from 'react';
import './works.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0);

    const data = [
        {
            id: "efficiencyLeaders",
            title:"Efficiency Leaders",
            website:"https://www.efficiencyleaders.com.au/",
            logoCompany:"/assets/ef-logo.png",
            logosTechnologies: [
                "/assets/angular.png",
                "/assets/bootstrap.png",
                "/assets/git.png",
                "/assets/net.png",
                "/assets/ts.png",
            ],
            image:"/assets/handLaptop.jpg",
            desc:"Efficiency Leaders is an Australian company based in Sydney/Gold Coast/Bangalore providing technology solutions process automation within organisations.",
            roles:[ 
                     "- Adding and testing of features and bug fixes to the Rapid product.",
                     "- Analyse bug reports from users and fixing them.",
                     "- Modify Controllers and Models when was required with C#.",
                     "- Use of git and git-flow for product develop version control processes.",
                     "- Adding and modifying components using typescript and Angular 6/7.", 
            ],
            product:"Rapid AP",
        },
        {
            id: "agtrix",
            title:"Agtrix",
            website:"https://www.agtrix.com/",
            logoCompany:"/assets/agtrix.png",
            logosTechnologies: [
                "/assets/bootstrap.png",
                "/assets/net.png",
                "/assets/xamarin-black.png",
                "/assets/c-sharp.png",
                "/assets/kendo.png",
            ],
            image:"/assets/keyboard.jpg",
            desc:"Agtrix is an innovative Australian company based in Ocean Shores providing sophisticated technology solutions for the agricultural sector.",
            roles:[ 
                "- Adding new features and improvement of layout of mobile App.",
                "- Testing new changes & updates on Mobile App.",
                "- Xamarin Forms – Cross Platform Win-IOS- Android).",
                "- Release of Mobile App (Win-Android-IOS).",
                "- Analyse bug reports from users and fixing them.",
             ],
             product:"Mobile App",
        },
    ];

    const handleClick = (direction)=>{
        direction === "left" ? setCurrentSlide(0) : setCurrentSlide(1);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
            {data.map((d) => (
                <div key={d.id} className="container">
                    <div className="item">
                        <div className="top">
                            <div className="imgContainer">
                                <img src={d.logoCompany} alt=""/>
                                <a href={d.website} target="_blank" rel="noopener noreferrer">View Website</a>
                            </div>
                        </div>
                        <div className="roles">
                                <h2>{d.product}</h2>
                                <ul>
                                    {d.roles.map((role) => {                             
                                        return (
                                            <li>{role}</li>  
                                        )})
                                    }
                                </ul>    
                        </div>
                        <div className="technologies">
                                <div className="images">
                                    {d.logosTechnologies.map((logo) => {                             
                                        return (
                                            <img src={logo} alt=""/>  
                                        )})
                                    }
                                </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <div className="arrow right">
                {
                  currentSlide === 0 ? <ArrowForwardIosIcon style={{ fontSize: 50, opacity: 0.5, color: 'whitesmoke'}} onClick={()=>handleClick("")}/>:null
                }
            </div>
            <div className="arrow left">
                {
                  currentSlide === 1 ? <ArrowBackIosIcon style={{ fontSize: 50, opacity: 0.5 , color: 'whitesmoke'}} onClick={()=>handleClick("left")}/>:null
                }
            </div>
            <div className="bottomContainer">
                    <a href="#education">
                        <h3>Education</h3>
                        <div className="arrow">
                            <KeyboardArrowDownIcon/>
                        </div>
                    </a>
            </div>       
        </div>
    );
}
