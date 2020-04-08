import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

// docs: https://www.chartjs.org/docs/latest/charts/bar.html
// https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react
// color-hex gradient examples: https://www.color-hex.com/color-palette/4699

class BarChart extends Component {

  render() {

    const Rating = {
      labels: ['5 Stars', '4 Stars', '3 Stars',
               '2 Stars', '1 Star'],
      datasets: [
        {
          label: 'Number of Reviews',
          backgroundColor: [
            'rgba(255,193,0,.6)',
            'rgba(255,154,0,.45)',
            'rgba(255,116,0,.3)',
            'rgba(255,77,0,.25)',
            'rgba(255,0,0,.2)',
          ],
          borderColor: 'rgba(0,0,0,.5)',
          borderWidth: 1,
          data: this.props.data
        }
      ]
    }

    return (
      <div>
        <Bar
          data={Rating}
          width={'500rem'}
          height={'400rem'}
          options={{
            title:{
              display:true,
              text:'Review Breakdown',
              fontSize: 20,
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

export default BarChart;