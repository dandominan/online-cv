import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        
        return (
            <div>
             <link to="/Home">Home</link> | 
             <link to="/About">About</link> |
             <link to="/Projects">Projects</link> |
             <link to="Contact">Let's Talk!</link> 
            </div>
        )
    }
}
