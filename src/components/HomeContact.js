import React, {Component} from "react";
import Clothes from '../assets/Background-Contact-Form.jpg';
import Decoration from '../assets/Decoration.svg';
import Instagram from '../assets/Instagram.svg';
import Facebook from '../assets/Facebook.svg';

class Contact extends Component {
    render() {
        return (
            <div id='contactSection' name='Contact'>
                <img id='clothes' src={Clothes} alt='clothes'/>
                <form>
                    <h3>Skontaktuj się z nami</h3>
                    <img src={Decoration} alt='decoration'/>
                    <label>Wpisz swoje imię<br/><input type='text' name='name' placeholder='Krzysztof'/></label>
                    <label>Wpisz swój email<br/><input type='email' name='email' placeholder='abc@xyz.pl'/></label>
                    <label>Wpisz swoją wiadomość<br/><textarea rows='4' placeholder='Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                         et dolore magna aliqua. '/></label>
                    <input type='submit' value='Wyślij'/>
                </form>
                <footer>
                    <p>Copyright by CodersLab</p>
                    <img src={Facebook} alt='facebookIcon'/>
                    <img src={Instagram} alt='instagramIcon'/>
                </footer>
            </div>
        )
    }
}

export default Contact;