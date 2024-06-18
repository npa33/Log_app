import React from 'react';
import Sidebar from '../components/Sidebar';

const ProfilePage: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <h1>My Profile</h1>
        <p>Profile details will be displayed here.</p>
      </div>
    </div>
  );
};

export default ProfilePage;
