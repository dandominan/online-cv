import React, { Component } from 'react'
import Navbar from '../Navbar'


export default class Contact extends Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar/>
                </header>
                <div>
                    <input type="text" placeholder="Name..." />
                    <input type="text" placeholder="Subject" />
                    <input type="textarea" placeholder="How can I help?" />
                    <input type="button" value="Submit" />
                </div>

            </div>
        )
    }
}
