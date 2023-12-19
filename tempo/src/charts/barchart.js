import React from 'react';
import { Pie , Radar, Line} from 'react-chartjs-2';
const barchart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [30, 20, 50], 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div style={{height:"300px"}}>
      {/* <h6>Energy Consumption Trend</h6> */}
      <Line data={data} options={options} />
    </div>
  );
};

export default barchart;
