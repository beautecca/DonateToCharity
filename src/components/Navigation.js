import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll/modules";
import SimpleSteps from "./HomeSimpleSteps";
import AboutUs from "./HomeAboutUs";
class Navigation extends Component {
    render() {
        return (
            <div id='navigation'>
                <div id='start'>
                    <div><NavLink to='/logowanie'>Zaloguj</NavLink></div>
                    <div><NavLink to='/rejestracja'>Załóż konto</NavLink></div>
                </div>
                <nav>
                    <ul>
                        <li><NavLink> Start</NavLink></li>
                        <li><Link scroll to={SimpleSteps}>O co chodzi?</Link></li>
                        <li><Link scroll to={AboutUs}>O nas</Link></li>
                        <li><Link>Fundacja i organizacje</Link></li>
                        <li><Link>Kontakt</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navigation;