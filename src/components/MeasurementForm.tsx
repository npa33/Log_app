import React, { useState } from 'react';

interface MeasurementFormProps {
  setIsRunning: (running: boolean) => void;
  setIntervalTime: (interval: number) => void;
  }

const MeasurementForm: React.FC<MeasurementFormProps> = ({ setIsRunning, setIntervalTime }) => {
  const [isRunning, setRunning] = useState(false);
  const [interval, setInterval] = useState(1);

  const handleStartStop = () => {
    setRunning(!isRunning);
    setIsRunning(!isRunning);
  };

  const handleIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInterval = parseInt(e.target.value, 10);
    setInterval(newInterval);
    setIntervalTime(newInterval);
  };

  return (
    <form className="measurement-form">
      <div className="form-group">
        <label>Model</label>
        <input type="text" placeholder="Model" />
      </div>
      <div className="form-group">
        <label>Sản phẩm</label>
        <input type="text" placeholder="Sản phẩm" />
      </div>
      <div className="form-group">
        <label>Công lệnh</label>
        <input type="text" placeholder="Công lệnh" />
      </div>
      <div className="form-group sn-group">
        <div className="sn-field">
          <label>From SN</label>
          <input type="text" placeholder="From SN" />
        </div>
        <div className="sn-field">
          <label>To SN</label>
          <input type="text" placeholder="To SN" />
        </div>
      </div>
      <div className="form-group-wide">
        <label>Công đoạn</label>
        <input type="text" placeholder="Công đoạn" />
      </div>
      <div className="form-group">
        <label>URL</label>
        <input type="text" placeholder="URL" />
      </div>
      <div className="form-group">
        <label>Interval (seconds)</label>
        <input type="number" placeholder="Interval (seconds)" value={interval} onChange={handleIntervalChange} />
      </div>
      <button type="button" onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </form>
  );
};

export default MeasurementForm;
