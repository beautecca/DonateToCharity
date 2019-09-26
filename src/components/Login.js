import React, {Component} from "react";
import Navigation from "./Navigation";
import Decoration from '../assets/Decoration.svg';
import {NavLink} from "react-router-dom";
class Login extends Component {
    render() {
        return (
            <div id='LogNav'>
                <Navigation/>
                <h1>Zaloguj się</h1>
                <img src={Decoration} alt='decoration'/>
                <div id='login'>
                    <label>Email<input type='email' name='email'/></label>
                    <label>Hasło<input type='password' name='password'/></label>
                </div>
                <div id='loginButtons'>
                    <div><NavLink to='/rejestracja'>Załóż konto</NavLink></div>
                    <div>Zaloguj się</div>
                </div>
            </div>
        )
    }
}
export default Login;