import React, { Component } from 'react';
import Navbar from '../Navbar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <header><Navbar/></header>
                <div>
                    <p>Dan Dominan</p>
                    <p>FrontEnd WebDeveloper</p>
                    <div>
                        <img src="C:\Users\ralup\Desktop\Online_CV\online-cv\src\logos\GitHub-Mark.png" />
                        <img src="C:\Users\ralup\Desktop\Online_CV\online-cv\src\logos\LinkedIn-Logo.png" />
                    </div>
                </div>
            </div>
        )
    }
}
