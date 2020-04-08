import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import firebase from '../../../firebase/fbConfig'
import PieChartGreat from '../PieChartGreat/PieChartGreat'
import BarChart from '../BarChart/BarChart'
import PieChartBad from '../PieChartBad/PieChartBad'
import Grid from '@material-ui/core/Grid'

import './Analytics.css'

let db = firebase.firestore();

class Analytics extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        const docRef = db.collection("users").doc(this.props.auth.uid).collection("customers").get()
        .then(querySnapshot => {
            querySnapshot.docs.map(doc => {
                var joined = this.state.reviews.concat(doc.data().rating)
                this.setState({reviews: joined})
            });
        });
    }

    render() { 
        const { auth } = this.props
        const ArrRatings = this.state.reviews
        const num_total_review = ArrRatings.length
        const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

        function Count(n) {
          return ArrRatings.filter(x => x == n).length;
        }

        console.log(num_total_review)
        // console.log(average(this.state.reviews))

        console.log(average(ArrRatings))

        if (!auth.uid) return <Redirect to='/signin' />

        return (
        <>
            <Navbar />
                <h2 style={{marginTop: 0}}>Analytics</h2>
                <p>Number of Total Reviews: {num_total_review}</p>
                <p>Average Rating: {average(ArrRatings)}</p>

            <Grid container direction="column" justify="flex-start" alignItems="center">
                <div className="barChart">
                    <BarChart data={[Count(5), Count(4), Count(3), Count(2), Count(1)]}/>
                </div>
            </Grid>

            <Grid container direction="column" justify="flex-start" alignItems="center">
                <div className="reviewTotal">
                    <PieChartGreat />
                </div>
            </Grid>

            <Grid container direction="column" justify="flex-start" alignItems="center">
                <div className="reviewTotal">
                    <PieChartBad />
                </div>
            </Grid>
        </>);
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
 
export default connect(mapStateToProps, null)(Analytics);