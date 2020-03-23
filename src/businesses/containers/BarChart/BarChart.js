import React from 'react';
import Chart from "react-google-charts";

const BarChart = () => {
    return (<Chart
        width={'800px'}
        height={'500px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Category', 'Doing Great', 'Needs Improvement'],
          ['Food', 7, 3],
          ['Service', 2, 1],
          ['Pricing', 13, 1],
          ['Ambience', 3, 3],
          ['Cleanliness', 15, 1],
          ['Plating', 1, 0],
          ['Other', 1, 3],
        ]}
        options={{
          colors: ['#0378d8','d8030d'],
        //   legendTextStyle: { color: 'gray' },
        //   titleTextStyle: { color: 'gray' },
        //   title: 'Customer Feedback Votes',
          chartArea: { width: '80%', height: '80%' },
          hAxis: {
            title: '# of Votes',
            minValue: 0,
          },
        //   vAxis: {
        //     title: 'City',
        //   },
          backgroundColor: '#fafafa',
        }}
        // For tests
        rootProps={{ 'data-testid': '1' }}
      />);
}
 
export default BarChart;