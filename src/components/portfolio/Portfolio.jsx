import React from 'react';
import './portfolio.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Portfolio(props) {
  
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="item">
                    <img src="/assets/web.png" alt="Image of website background"/>
                    <div className="description">
                        <div className="icon">
                            <a href="https://github.com/juanNavarroCasanova/portfolio" target="_blank" rel="noopener noreferrer">Website Repository</a> 
                        </div>
                    </div>
                </div>
                <div className="item construction">
                    <img src="/assets/covid-map.jpg" alt="Image of Covid app"/>
                    <div className="description">
                        <h3>COVID Tracker</h3>
                        <h2>Under Construction</h2>
                    </div>
                </div>
                <div className="item construction">
                    <img src="/assets/hand-laptop.jpg" alt="Image of Roster App"/>
                    <div className="description">
                        <h3>Roster App</h3>
                        <h2>Under Construction</h2>
                    </div>
                </div>
            </div>
            <div className="bottomContainer">
                    <a href="#works">
                        <h3>Work Experience</h3>
                        <div className="arrow">
                            <KeyboardArrowDownIcon/>
                        </div>
                    </a>
            </div> 
        </div>
    )
}
