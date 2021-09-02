import React, { Component } from 'react';
import './ProjectItem.css';

export default class ProjectItem extends Component {
    render() {

        return (
            <div className="project-div">

                <div className="avatar">
                    <img className="image" src={this.props.src}/>
                    <a id="link-code" href={this.props.codeLink} target="_blank"> See the Code!</a>
                </div>
                <div className="project-description">
                    <div>
                        <p className="title">{this.props.title}</p>
                        <p className="story"> {this.props.story} </p>
                    </div>
                </div>

            </div>
        )
    }
}
