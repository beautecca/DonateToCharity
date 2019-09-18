import React, { Component } from "react";
import People from '../assets/People.jpg';
import Signature from '../assets/Signature.svg';
import Decoration from '../assets/Decoration.svg';
class AboutUs extends Component {
    render() {
        return (
        <div id='aboutSection'>
            <div id='info'>
                <h3>
                    O nas
                </h3>
                <img src={Decoration} alt='decoration'/>
                <p>
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </p>
                <img src={Signature} alt='signature'/>
            </div>
            <div id='peoplePic'>
                <img alt='people' src={People}/>
            </div>
        </div>
        )
    }
}
export default AboutUs;