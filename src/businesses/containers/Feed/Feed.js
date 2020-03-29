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
    state = {  }

    componentDidMount() {
        const docRef = db.collection("users").doc(this.props.auth.uid)
        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

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
        console.log(this.props.auth.uid)
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