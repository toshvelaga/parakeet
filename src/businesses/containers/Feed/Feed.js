import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './Feed.css'

import Reviews from '../../components/Reviews/Reviews'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Feed extends Component {
    constructor(props) {
        super(props)
    }
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

    result = Object.values(this.reviewData)

    render() { 
        const { auth } = this.props
        console.log(auth)

        if (!auth.uid) return <Redirect to='/signin' />
        return (
        <div>
            <Navbar />
            <h2 style={{marginTop: 0}}>Feed</h2>

            {this.result.map(({text, rating, date, email, index}) => {
                return (<Reviews key={index + email + text} text={text} n={rating} email={email} date={date} />
                )
            })}
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

 
export default connect(mapStateToProps, null)(Feed);