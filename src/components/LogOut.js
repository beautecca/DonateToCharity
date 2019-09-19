import React, {Component} from "react";
import Navigation from "./Navigation";
import Decoration from '../assets/Decoration.svg';
import {NavLink} from "react-router-dom";

class LogOut extends Component {
    render() {
        return (
            <>
                <div id='LogNav'><Navigation/></div>
                <div id='logOutAlert'>
                    <h3>Wylogowanie nastąpiło<br/>pomyślnie!</h3>
                    <img src={Decoration} alt='decoration'/>
                    <div><NavLink to='/'>Strona główna</NavLink></div>
                </div>
            </>
        )
    }
}

export default LogOut;