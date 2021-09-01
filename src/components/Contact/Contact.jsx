import React, { Component } from 'react'
import Navbar from '../Navbar'


export default class Contact extends Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar/>
                </header>
                <div id="contact-page">
                    <input type="text" placeholder="Name..." />
                    <input type="text" placeholder="Subject" />
                    <input type="textarea" placeholder="How can I help?" />
                    <input type="button" value="Send" />
                </div>

            </div>
        )
    }
}
