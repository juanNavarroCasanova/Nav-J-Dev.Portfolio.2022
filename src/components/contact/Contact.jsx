import React from 'react';
import './contact.scss';
import { useState } from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {
    const [message,setMessage] = useState(false);
    const [messageSent,setMessageSent] = useState(false);
   
    function sendEmail(e) {
        e.preventDefault();
        setMessage(true);


        emailjs.sendForm(
            'service_elagqq4',
            'template_td4zhln',
            e.target,
            'user_hEagTAxfn8o2OkemLpFGu')
            .then(res => {
                res.preventDefault();
                setMessageSent(true);
            }).catch(err => console.log(err));

        e.target.reset();
    }
    return (
        <div className="contact" id="contact">
            <div className="wrapper">
                <div className="card">
                    <h1>LET'S GET SOCIAL</h1>
                    <div className="icon">
                        <a href="https://au.linkedin.com/in/navarrocasanova?trk=profile-badge" target="_blank" rel="noopener noreferrer">
                            <img src={'assets/linkedin.png'}  alt="Logo"/>
                        </a> 
                    </div> 
                    <h2>Or drop me a message...</h2>
                    <form onSubmit={sendEmail}>
                            <input name="name" placeholder="Name" required/>
                            <input type="email" name="email" placeholder="Email" required/>
                            <textarea name="message" maxLength="300" placeholder="Message" required></textarea>
                                <button type="submit">Send</button>
                                {message && !messageSent ? <span>Thanks for your message, I'll replay as soon as possible.</span>: null}
                    </form>
                    
                </div>
            </div>
        </div>
        
    )
}
