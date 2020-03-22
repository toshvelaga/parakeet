import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './Feed.css'

import Reviews from '../../components/Reviews/Reviews'

class Feed extends Component {
    state = {  }

    reviewData = {
        data1 : {
            text: "Great service!",
            rating: 4,
            date: '3/20/20',
            email: 'toshvelaga@gmail.com'
        },
        data2 : {
            text: "The service could use improvement. I was very dissapointed.",
            rating: 2,
            date: '3/20/20',
            email: 'igor@gmail.com'
        }
   }

    render() { 
        return (
        <div>
            <Navbar />
            <h2 style={{marginTop: 0}}>Feed</h2>
            <Reviews text="Great service!" n={this.reviewData.data1.rating} email="toshvelaga@gmail.com" date="3/20/20"  />
        </div>);
    }
}
 
export default Feed;