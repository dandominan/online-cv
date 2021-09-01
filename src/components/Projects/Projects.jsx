import React, { Component } from 'react';
import CommentBox from '../pics/Comment-box.png';
import RPS from '../pics/RPS-game.png';
import Spaceship from '../pics/SpaceShip.png';
import Thinking from '../pics/Thinking.jpg';
import Timer from '../pics/Timer.png';
import ToDo from '../pics/todo_React.jpg';
import Navbar from '../Navbar';
import './Projects.css';

export default class Projects extends Component {
    render() {
        return (
            <div className="main">
                <header>
                    <Navbar/>
                </header>
                <div id="project-page">
                    <div className="project1">
                        <div>
                        <img className="image" src={CommentBox}/>
                        </div>
                       <div className="description">
                        <p className="title">Comment Box</p> 
                        <p className="story"> One of my first assigments, using JS Vanilla, I made a comment box, with an Add functionality.</p>
                       </div>
                    </div>
               
                    <div className="project2">
                        <div>
                        <img className="image" src={RPS}/>
                        </div>
                       <div className="description">
                       <p className="title">Rock-Paper-Scissors</p>
                        <p className="story"> Again, using Javascript functions, I created a Rock-Paper-Scissors game that gives 
                            the player the 3 choices, makes a random choice for the PC, compares the choices and keeps the score.</p>
                       </div>
                    </div>

                    <div className="project1">
                        <div>
                        <img className="image" src={Spaceship}/>
                        </div>
                       <div className="description">
                       <p className="title">Spaceship Battle</p>
                        <p className="story"> Not a full on game, just and exercise where I put a button that generates a Spaceship. Once you generate one or 
                            more, you can select/deselect them and move the selected ones using the arrow keys.</p>
                       </div>
                    </div>

                    <div className="project2">
                        <div>
                        <img className="image" src={Timer}/>
                        </div>
                       <div className="description">
                       <p className="title">Timer</p>
                        <p className="story"> A simple timer, with start, stop and reset functionalities. Also keeps track of the saved times.
                             At the core it uses SetInterval and ClearInterval functions.</p>
                       </div>
                    </div>

                    <div className="project1">
                        <div>
                        <img className="image" src={Thinking}/>
                        </div>
                       <div className="description">
                       <p className="title">Thinking in React</p>
                        <p className="story"> My very first attempt at making a React app. It's based on the example from the React documentation.</p>
                       </div>
                    </div>

                    <div className="project2">
                        <div>
                        <img className="image" src={ToDo}/>
                        </div>
                       <div className="description">
                       <p className="title">Todo App</p>
                        <p className="story"> React app with the functionalities of add, mark complete and delete. 
                            Here I made use of class based components, functions, state, props, component life cycles
                            and even http requests to a mock server.</p>
                       </div>
                    </div>
                </div>

            </div>
        )
    }
}
