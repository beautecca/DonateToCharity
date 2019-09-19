import React, { Component } from "react";
import Decoration from '../assets/Decoration.svg';
import TshirtIcon from '../assets/Icon-1.svg';
import BagIcon from '../assets/Icon-2.svg';
import LoupeIcon from '../assets/Icon-3.svg';
import Icon from '../assets/Icon-4.svg';
import {NavLink} from "react-router-dom";
class SimpleSteps extends Component {
    render() {
        return (
            <div id='stepsSection'>
                <div id='introToSteps'>
                    <h3>Wystarczą 4 proste kroki</h3>
                    <img src={Decoration} alt='decoration'/>
                </div>
                <div id='steps'>
                    <div className='step'>
                        <img src={TshirtIcon} alt='T-shirt icon'/>
                        <h6>Wybierz rzeczy</h6>
                        <hr/>
                        <p>ubrania, zabawki,<br/>sprzęt i inne</p>
                    </div>
                    <div className='step'>
                        <img src={BagIcon} alt='bag icon'/>
                        <h6>Spakuj je</h6>
                        <hr/>
                        <p>skorzystaj z<br/>worków na śmieci</p>
                    </div>
                    <div className='step'>
                        <img src={LoupeIcon} alt='loupe icon'/>
                        <h6>Zdecyduj komu<br/>chcesz pomóc</h6>
                        <hr/>
                        <p>wybierz zaufane<br/>miejsce</p>
                    </div>
                    <div className='step'>
                        <img src={Icon} alt='icon'/>
                        <h6>Zamów kuriera</h6>
                        <hr/>
                        <p>kurier przyjedzie<br/>w dogodnym terminie</p>
                    </div>
                </div>
                <div id='buttonGive'>
                    <div><NavLink to='/logowanie'>ODDAJ<br/>RZECZY</NavLink></div>
                </div>
            </div>
        )
    }
}
export default SimpleSteps;