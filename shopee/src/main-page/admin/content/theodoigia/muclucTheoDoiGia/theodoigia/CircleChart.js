import React, { Component } from 'react';
import Chart from "react-apexcharts";
class CircleChart extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
            colors:  ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8','#FF9966','#FF3333'],
          labels: ['50-60', '60-70', '70-80', '80-90', '90-100','100-110','110-120','120-130','130-140','140-150'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        series: [44, 55, 13, 43, 22,45,76,89,13,45],
      }
    }

    render() {
      return (
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="pie" height="350" />
        </div>
        );
        }
    }
     
    export default CircleChart;