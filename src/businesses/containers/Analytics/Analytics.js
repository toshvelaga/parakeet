import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import firebase from '../../../firebase/fbConfig'
import PieChartGreat from '../PieChartGreat/PieChartGreat';
import BarChart from '../BarChart/BarChart';

import './Analytics.css'
import PieChartBad from '../PieChartBad/PieChartBad';
import Grid from '@material-ui/core/Grid';

let db = firebase.firestore();

class Analytics extends Component {
    constructor(props) {
        super()
    }
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
        console.log(auth)
        console.log(this.state.reviewData)

        if (!auth.uid) return <Redirect to='/signin' />

        return (
        <>
            <Navbar />
                <h2 style={{marginTop: 0}}>Analytics</h2>

            <Grid container direction="column" justify="flex-start" alignItems="center">
                <div className="barChart">
                    <BarChart />
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