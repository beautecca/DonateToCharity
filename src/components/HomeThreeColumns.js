import React, {Component} from "react";
class ThreeColumns extends Component {
    render() {
        return (
            <div id='columns'>
                <div className='eachColumn'>
                    <h3>10</h3>
                    <h5>ODDANYCH WORKÓW</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='eachColumn'>
                    <h3>5</h3>
                    <h5>WSPARTYCH ORGANIZACJI</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='eachColumn'>
                    <h3>7</h3>
                    <h5>ZORGANIZOWANYCH ZBIÓREK</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        )
    }
}

export default ThreeColumns;