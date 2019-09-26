import React, {Component} from "react";
import Navigation from "./Navigation";
import Decoration from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";
class Register extends Component {
    render() {
        return (
            <>
                <Navigation/>
                <h1>Załóż konto</h1>
                <img src={Decoration} alt='decoration'/>
                <form id='register'>
                    <label>Email<input type='email' name='email'/></label>
                    <label>Hasło<input type='password' name='password'/></label>
                    <label>Powtórz hasło<input type='password' name='confirm'/></label>
                </form>
                <div id='registerButtons'>
                    <div><NavLink to='/logowanie'> Zaloguj się</NavLink></div>
                    <input type='submit' value='Załóż konto'/>
                </div>
            </>
        )
    }
}
export default Register;