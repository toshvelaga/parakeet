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
            <QRcode />
        </div>);
    }
}
 
export default Customize;