import React from 'react';
import {Bar} from 'react-chartjs-2';

const Rating = {
  labels: ['5 Stars', '4 Stars', '3 Stars',
           '2 Stars', '1 Star'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class BarChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={Rating}
          options={{
            title:{
              display:true,
              text:'Average Rating',
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