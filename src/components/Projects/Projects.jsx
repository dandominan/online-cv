import React, { Component } from 'react';
import CommentBox from '../pics/Comment-box.png';
import RPS from '../pics/RPS-game.png';
import Spaceship from '../pics/SpaceShip.png';
import Thinking from '../pics/Thinking.jpg';
import Timer from '../pics/Timer.png';
import ToDo from '../pics/todo_React.jpg';
import Navbar from '../Navbar';
import './Projects.css';
import ProjectItem from '../ProjectItem/ProjectItem';
import ArrowUp from '../Pics/arrow-up.png';

export default class Projects extends Component {
    render() {

        let PROJECTS = [
            {
                key: '1',
                imageSrc: CommentBox,
                title: 'Comment Box',
                story: 'One of my first assigments. Using JS Vanilla, I made a comment box with an ADD functionality.',
                codeLink: 'https://github.com/dandominan/SIIT_Dan_Dominan/tree/main/05_week_homework'
            },
            {
                key: '2',
                imageSrc: RPS,
                title: 'Rock-Paper-Scissors',
                story: 'Again, using JS Vanilla, I made a RPS game, that takes in the player`s choice, makes a random choice for the PC, compares them and returns the winner. It also keeps the score.',
                codeLink: 'https://github.com/dandominan/SIIT_Dan_Dominan/tree/main/06_homework2'
            },
            {
                key: '3',
                imageSrc: Spaceship,
                title: 'Spaceship Game',
                story: 'Not a full-on game, just a button that generates the spaceships one by one. Once generated, you can select/deselect the spaceships and move them using the arrow keys',
                codeLink: 'https://github.com/dandominan/SIIT_Dan_Dominan/tree/main/10_week_homework'
            },
            {
                key: '4',
                imageSrc: Timer,
                title: 'Timer',
                story: 'Using SetInterval() and ClearInterval() functions at the core of the code, I created a timer with the Start, Stop, Save and Reset functions. It also keeps track of the saved times.',
                codeLink: 'https://github.com/dandominan/SIIT_Dan_Dominan/tree/main/07_homework'
            },
            {
                key: '5',
                imageSrc: Thinking,
                title: 'Thinking in React',
                story: 'My very first React app, I replicated a section of an online shop, using the guidance from the React documentation.',
                codeLink: 'https://github.com/dandominan/SIIT_Dan_Dominan/tree/main/14_week_homework'
            },
            {
                key: '6',
                imageSrc: ToDo,
                title: 'Todo App',
                story: 'Made using React concepts, this app renders a list of todos received from a mock server. You can delete them, mark them as completed as well as adding new ones.',
                codeLink: 'https://github.com/dandominan/SIIT_Dan_Dominan/tree/main/15_week_homework'
            }
        ]

        const scrollToTop = () =>{
            window.scrollTo({
              top: 0, 
              behavior: 'smooth'
            });
          };
        return (
            <div className="main">
                <header>
                    <Navbar />
                </header>
                <div id="project-page">
                    <div className="project1">
                       {PROJECTS.map((Project)=>(
                           <ProjectItem
                           key={Project.key}
                           src = {Project.imageSrc}
                           title = {Project.title}
                           story = {Project.story}
                           codeLink = {Project.codeLink}
                           />
                       ))}
                    </div>
                    </div>
                    <img id="arrow-up" src={ArrowUp} onClick={scrollToTop}/>
                    </div>
                    )
    }
}
    