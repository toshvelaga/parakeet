import React from 'react';
import {Bar} from 'react-chartjs-2';

// docs: https://www.chartjs.org/docs/latest/charts/bar.html
// https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react

const Rating = {
  labels: ['5 Stars', '4 Stars', '3 Stars',
           '2 Stars', '1 Star'],
  datasets: [
    {
      label: 'Number of Reviews',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [4, 5, 1, 2, 1]
    }
  ]
}

export default class BarChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={Rating}
          width={'500rem'}
          height={'300rem'}
          options={{
            title:{
              display:true,
              text:'Average Rating',
              fontSize:20,
            },
            legend:{
              display:true,
            },
            scales: {
              yAxes: [{
                ticks: {
                  stepSize: 1,
                  beginAtZero: true,
                },
              }],
            }
          }}
        />
      </div>
    );
  }
}