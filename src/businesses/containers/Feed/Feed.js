import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './Feed.css'
import Reviews from '../../components/Reviews/Reviews'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import firebase from '../../../firebase/fbConfig'

let db = firebase.firestore();

class Feed extends Component {
    state = { 
        reviewData: []
     }

    componentDidMount() {
        const docRef = db.collection("users").doc(this.props.auth.uid).collection("customers").get()
        .then(querySnapshot => {
            querySnapshot.docs.map(doc => {
                var joined = this.state.reviewData.concat(doc.data())
                this.setState({reviewData: joined})
            });
        });
    }

    render() { 

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