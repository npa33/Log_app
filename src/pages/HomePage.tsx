import React from 'react';
import Sidebar from '../components/Sidebar';

const HomePage: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <div className="welcome">
          {/* <div>
            <h1>Welcome back, Jaydon Frankie</h1>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
          </div>
          <button>Go Now</button>
        </div>
        <div className="stats">
          <div className="stat">
            <h3>Total Active Users</h3>
            <div className="value">18,765</div>
          </div>
          <div className="stat">
            <h3>Total Installed</h3>
            <div className="value">4,876</div>
          </div>
          <div className="stat">
            <h3>Total Downloads</h3>
            <div className="value">678</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
