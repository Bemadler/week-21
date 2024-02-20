import React from 'react';
import { Chart } from 'react-google-charts';
import './App.css';

function App() {
  const data = [
    ['Task', 'Hours per Day'],
    ['Коддинг', 50],
    ['Сон', 30],
    ['Еда', 20],
  ];

  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          title: 'Распределение времени',
          is3D: true,
        }}
      />
    </div>
  );
}

export default App;
