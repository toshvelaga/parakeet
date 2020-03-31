import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import firebase from '../../../firebase/fbConfig'
import PieChartGreat from '../PieChartGreat/PieChartGreat';
import BarChart from '../BarChart/BarChart';

import './Analytics.css'
import PieChartBad from '../PieChartBad/PieChartBad';

// todo: good reviews
// todo: bad reviews
// todo: most frequently selected items for improvement (bar chart)
// todo: most frequently selected items that business is doing well in (bar chart)

// can use ChartJS: https://www.chartjs.org/docs/latest/charts/bar.html

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
            <div style={{display: 'inline-block', marginTop: '1rem'}}>
                <BarChart />
            </div>

            <div style={{marginTop: '3rem'}}>
                <div style={{marginRight: '5rem'}} className="reviewTotal">
                    <PieChartGreat />
                </div>
                <div className="reviewTotal">
                    <PieChartBad />
                </div>
            </div>

        </>);
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
 
export default connect(mapStateToProps, null)(Analytics);