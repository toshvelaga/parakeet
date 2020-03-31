import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

// blue hex gradient: https://www.color-hex.com/color/0378d8

const state = {
  labels: ['Food', 'Service', 'Pricing',
           'Ambience', 'Cleanliness', 'Plating', 'Other'],
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
        'whitesmoke'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [6, 5, 8, 8, 5, 3, 3]
    }
  ]
}

export default class PieChartGreat extends React.Component {
  render() {
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
          data={state}
          width={'400rem'}
          height={'300rem'}
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
        />
      </div>
    );
  }
}