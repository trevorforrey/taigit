import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

export default class LineChart extends Component {

chartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
}]
};

chartOptions = {
  scales: {
    yAxes: [{
        ticks: {
            beginAtZero:true
        }
    }]
  }
}

  render() {
    return (
      <div>
      <Line
        data = {{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }, {
            label: '#2 of Votes',
            data: [2, 50, 13, 25, 12, 3],
            backgroundColor: 'rgba(100,100,100,0.1)',
            borderColor: 'rgba(0,100,0,1)',
            borderWidth: 1,
            fill: false
        }]
        }}
        options = {{
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
          }
        }}
      />
      </div>
    )
  }
}