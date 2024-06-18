import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './ChartPopup.css';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartPopupProps {
  measurements: any[];
}

const ChartPopup: React.FC<ChartPopupProps> = ({ measurements }) => {
  const [selectedMetric, setSelectedMetric] = useState('AC');

  const getChartData = () => {
    const labels = measurements.map((_, index) => `Measurement ${index + 1}`);
    const data = measurements.map((measurement) => {
      if (selectedMetric === 'AC') return measurement.ac_volt;
      if (selectedMetric === 'DC') return measurement.dc_volt;
      if (selectedMetric === 'Val') return measurement.dc_curr;
      return 0;
    });

    return {
      labels,
      datasets: [
        {
          label: selectedMetric,
          data,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    };
  };

  return (
    <div className="chart-popup">
      <select
        className="form-select mb-3"
        value={selectedMetric}
        onChange={(e) => setSelectedMetric(e.target.value)}
      >
        <option value="AC">AC</option>
        <option value="DC">DC</option>
        <option value="Val">Val</option>
      </select>
      <div className="chart">
        <Line data={getChartData()} />
      </div>
    </div>
  );
};

export default ChartPopup;
