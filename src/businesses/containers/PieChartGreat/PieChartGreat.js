import React, { Component } from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import firebase from '../../../firebase/fbConfig'
import { connect } from 'react-redux'

let db = firebase.firestore();

class PieChartGreat extends Component {
  state = {
    Doing_Well : []
  }

  componentDidMount() {
    const docRef = db.collection("users").doc(this.props.auth.uid).collection("customers").get()
    .then(querySnapshot => {
        querySnapshot.docs.map(doc => {
            var joined = this.state.Doing_Well.concat(doc.data().Doing_Well)
            this.setState({Doing_Well: joined})
        });
    });
  }

  render() {
    const ArrDoing_Well = this.state.Doing_Well

    function Count(feedback) {
      return ArrDoing_Well.filter(x => x == feedback).length;
    }

    const labels = ['Food', 'Service', 'Pricing',
    'Ambience', 'Cleanliness', 'Plating', 'Other']
  
    const rating = {
      labels: labels,
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
            '#fe6383',
            '#ffcc56',
            '#4ac0c0',
            '#9966ff',
            '#36a2eb',
            '#ff9f40',
            'lightgray'
          ],
          data: labels.map(label => Count(label)),
        }
      ]
    }
    return (
      <div>
        {/* <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Doing Great Feedback',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /> */}

        <Doughnut
          data={rating}
          width={'400rem'}
          height={'300rem'}
          options={{
            title:{
              display:true,
              text:'Areas That Are Excellent',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, null)(PieChartGreat)