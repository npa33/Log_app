import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import MeasurementForm from '../components/MeasurementForm';
import MeasurementTable from '../components/MeasurementTable';
import ChartModal from '../components/ChartModal';
import data from '../data/data.json';

const MeasurementPage: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [measurements, setMeasurements] = useState<any[]>([]);
  const [intervalTime, setIntervalTime] = useState(1);
  const [showChartModal, setShowChartModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleChartModalClose = () => setShowChartModal(false);
  const handleChartModalShow = () => setShowChartModal(true);

  let index = 0;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && intervalTime > 0) {
      interval = setInterval(() => {
        updateMeasurements();
      }, intervalTime * 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, intervalTime]);

  const updateMeasurements = () => {
    const nextMeasurement = data.rect[measurements.length % data.rect.length + index];
    index++;
    console.log(measurements.length % data.rect.length+index)
    setMeasurements(prevMeasurements => {
      const newMeasurements = [...prevMeasurements, nextMeasurement];
      console.log('Updated Measurements Array:', newMeasurements); // In mảng sau mỗi lần cập nhật
      return newMeasurements;
  });

    setCurrentIndex(currentIndex + 1);
    // console.log('Next Measurement:', nextMeasurement);
    // console.log('Current Measurements Length:', measurements.length);
  };

  const handleIntervalChange = (newInterval: number) => {
    setIntervalTime(newInterval);
  };

  return (
    <div>
      <Sidebar />
      <div className="content">
        <MeasurementForm setIsRunning={setIsRunning} setIntervalTime={handleIntervalChange} />
        <MeasurementTable measurements={measurements} />
        {!isRunning && (
          <div>
            <button>Save</button>
            <button onClick={handleChartModalShow}>View Chart</button>
            <ChartModal show={showChartModal} handleClose={handleChartModalClose} measurements={measurements} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MeasurementPage;
