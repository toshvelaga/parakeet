import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './Feed.css'
import Reviews from '../../components/Reviews/Reviews'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import firebase from '../../../firebase/fbConfig'

let db = firebase.firestore();

class Feed extends Component {
    constructor(props) {
        super(props)
    }
    state = { 
        reviewData: []
     }

    componentDidMount() {
        const docRef = db.collection("users").doc(this.props.auth.uid).collection("customers").get()
        .then(querySnapshot => {
            querySnapshot.docs.map(doc => {
                console.log(doc.data());
                var joined = this.state.reviewData.concat(doc.data())
                this.setState({reviewData: joined})
            });
        });
    }

    reviewData = [
        {
            review: "Great service!",
            rating: 4,
            date: '3/20/20',
            email: 'toshvelaga@gmail.com'
        },
        {
            review: "The service could use improvement. I was very dissapointed.",
            rating: 2,
            date: '3/20/20',
            email: 'igor@gmail.com'
        }
    ]

    // result = Object.values(this.reviewData)

    render() { 
        console.log(this.state.reviewData)
        // console.log(this.result)

        const { auth } = this.props

        if (!auth.uid) return <Redirect to='/signin' />
        return (
        <div>
            <Navbar />
            <h2 style={{marginTop: 0}}>Feed</h2>

            {this.state.reviewData.map(({review, rating, date, email, index}) => {
                return (<Reviews key={index + email + review} review={review} n={rating} email={email} date={date} />
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