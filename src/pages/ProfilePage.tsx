import React from 'react';
import Sidebar from '../components/Sidebar';

const AccountPage: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <h1>My Account</h1>
        <p>Account details will be displayed here.</p>
      </div>
    </div>
  );
};

export default AccountPage;
