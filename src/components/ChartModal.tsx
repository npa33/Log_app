import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartModalProps {
  show: boolean;
  handleClose: () => void;
  measurements: any[];
}

const ChartModal: React.FC<ChartModalProps> = ({ show, handleClose, measurements }) => {
  const [selectedMetric, setSelectedMetric] = useState('AC');

  const getChartData = () => {
    const labels = measurements.map((_, index) => `Measurement ${index + 1}`);
    const data = measurements.map((measurement) => {
      if (selectedMetric === 'AC') return measurement.ac_volt;
      if (selectedMetric === 'DC') return measurement.dc_volt;
      if (selectedMetric === 'Temp') return measurement.temp;
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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Chart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <select
          className="form-select mb-3"
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
        >
          <option value="AC">AC</option>
          <option value="DC">DC</option>
          <option value="Temp">Temp</option>
        </select>
        <div className="chart">
          <Line data={getChartData()} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChartModal;
