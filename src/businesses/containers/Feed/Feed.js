import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './Feed.css'

class Feed extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <Navbar />
            <h2 style={{marginTop: 0}}>Feed</h2>
        </div>);
    }
}
 
export default Feed;