import React, { Component } from 'react'
import './About.css';
import Navbar from '../Navbar';
import profilePic from '../Pics/profile-pic.jpg'

class About extends Component {
    render() {
        return (
            <div className="main">
                <header>
                    <Navbar />
                </header>
                <div id="about-page">
                    <img className="profilepic" src={profilePic} />
                    <div className="text" id="text">
                        <p>New to the industry, trying to learn something new every day.</p>
                        <p>After a few years of traveling and living abroad, working mostly in Hospitality, I decided to move back to Romania and start a new chapter
                            in my life.
                             {/* and I think Web Development will be able to feed my need to express my creativity and problem fixing, as well as providing me with a new door to open on the regular.  */}
                            </p>
                        <p>I recently followed the Javascript course from Scoala Informala, where I worked on numerous projects.
                            While doing this I got the chance to learn and use HTML, CSS, Javascript and React, including concepts of DOM, BOM, API, AJAX, etc
                        </p>
                        <p>Currently looking for small projects or a place in a team so I can expand my knowledge, as I see Frontend just as the beginning of this story! </p>
                        <p>On a more personal note, I'm an easy going, though quiet person. I am reliable both in my work and in my relationships. </p>
                        <p> As for my passions and interests, they go from art to sports to simply spending quality time with the people that are close to me, because even though I love technology,
                            I take my energy from human interactions. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;