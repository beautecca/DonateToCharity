import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Link, animateScroll as scroll} from 'react-scroll';
import HeaderPicture from '../assets/Home-Hero-Image.jpg';
import Decoration from '../assets/Decoration.svg';
import SimpleSteps from './HomeSimpleSteps';
import AboutUs from './HomeAboutUs';
import WhoWeHelp from './HomeWhoWeHelp';
import Contact from './HomeContact';
import Navigation from "./Navigation";
class Header extends Component {
    render() {
        return (
            <div id='header'>
                <div className='headerDivs'>
                    <img id='pic' src={HeaderPicture} alt='items'/>
                </div>
                <div className='headerDivs'>
                    <Navigation/>
                    <div id='begin'>
                        <h2>Zacznij Pomagać!</h2>
                        <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                        <img id='dec' src={Decoration} alt='decoration'/>
                        <div id='headerButtons'>
                            <div className='headerButton'><NavLink to='/logowanie'>ODDAJ<br/>RZECZY</NavLink></div>
                            <div className='headerButton'><NavLink to='/logowanie'>ZORGANIZUJ ZBIÓRKĘ</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;