import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

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
        'lightgray'
      ],
      data: [6, 5, 8, 8, 5, 3, 3]
    }
  ]
}

export default class PieChartBad extends React.Component {
  render() {
    return (
      <div>
        {/* <Pie
          data={state}
          width={'400rem'}
          height={'300rem'}
          options={{
            title:{
              display:true,
              text:'Doing Bad Feedback',
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
              text:'Areas that need improvement',
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