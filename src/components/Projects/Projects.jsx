import React, { Component } from 'react';
// import CommentBox from '../src/pics/Comment-box.png';
import Navbar from '../Navbar';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar/>
                </header>
                <div>
                    <div className="project">
                        {/* <img src={CommentBox}/> */}
                        <h2></h2>
                        <p></p>
                    </div>
                    <div className="project">
                        <img src=""/>
                        <h2></h2>
                        <p></p>
                    </div>
                    <div className="project">
                        <img src=""/>
                        <h2></h2>
                        <p></p>
                    </div>
                    <div className="project">
                        <img src=""/>
                        <h2></h2>
                        <p></p>
                    </div>
                </div>

            </div>
        )
    }
}
