import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import QRcode from '../../components/QRcode/QRcode'

class Customize extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <Navbar />
            <h2>Customize</h2>
            <span>Enter in business email: <input type="text"></input></span>
            <br></br><br></br>
            <span>Enter in name of restaurant: <input type="text"></input></span>
            <br></br><br></br>
            <QRcode />
        </div>);
    }
}
 
export default Customize;