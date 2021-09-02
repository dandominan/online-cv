import React, { Component } from 'react';
import Navbar from '../Navbar';
import './Contact.css';


export default class Contact extends Component {
    render() {
        return (
            <div id="main">
                <header>
                    <Navbar/>
                </header>
                <div id="contact-page">
                    <div id="input-area">
                    <input id="name-input" type="text" placeholder="Name..." />
                    <input id="subject-input" type="text" placeholder="Subject..." />
                    <input id="text-input" type="textarea" placeholder="How can I help?" />
                    </div>
                    
                    <input id="send-btn" type="button" value="Send" />
                </div>

            </div>
        )
    }
}
