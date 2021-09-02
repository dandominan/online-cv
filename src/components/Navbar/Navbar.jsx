import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        
        return (
            <div className="navbar">
             <Link className="link" to="/">Home</Link> | 
             <Link className="link" to="/about">About</Link> |
             <Link className="link" to="/projects">Projects</Link> |
             <Link className="link" to="contact">Let's Talk!</Link> 
            </div>
        )
    }

}
// const linkStyle = {
//     color: 'white',

// }
// const navStyle ={
//     border: 'white solid 3px',
//     color: 'white',
// }