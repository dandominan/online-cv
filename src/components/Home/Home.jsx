import React, { Component } from 'react';
import Navbar from '../Navbar';
import './Home.css';
import logoGit from '../Logos/GitHub-Mark.png';
import logoLink from '../Logos/LinkedIn-Logo.png';

export default class Home extends Component {
    render() {
        const openInNewTab = (url) => {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
        }
        return (

            <div className="container">
                <header className="header" ><Navbar /></header>

                <div id="home-page" >
                    <p className="name">Dan Dominan</p>
                    <p className="desc">FrontEnd WebDeveloper</p>
                    <div className="logos">
                        <img id="gitpic" src={logoGit} onClick={() => openInNewTab('https://github.com/dandominan/SIIT_Dan_Dominan')} />
                        <img id="linkpic" src={logoLink} onClick={() => openInNewTab('https://www.linkedin.com/in/dan-dominan-6372a1202')} />
                    </div>
                </div>
            </div>
        )
    }
}






