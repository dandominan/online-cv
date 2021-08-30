import React, { Component } from 'react'
import './About.css';
import Navbar from '../Navbar';

class About extends Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar/>
                </header>
                <div>
                    <img src="C:\Users\ralup\Desktop\Online_CV\online-cv\src\pics\profile-pic.webp"/>
                    <div id="text">
                        <p>New to the industry, trying to learn something new every day.</p>
                        <p>I recently followed the Javascript course from Scoala Informala, where I worked on numerous projects.
                        While doing this I got the chance to learn and use HTML, CSS, Javascript and React, including concepts of DOM, BOM, API, AJAX, etc
                        </p>
                        <p>Currently looking for small projects or a place in a team so I can expand my knowledge.
                        Frontend is just the beginning! </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;