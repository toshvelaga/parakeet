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
    render() { 
        const { auth } = this.props

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