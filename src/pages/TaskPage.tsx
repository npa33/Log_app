import React from 'react';
import Sidebar from '../components/Sidebar';

const TasksPage: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <h1>My Tasks</h1>
        <p>Tasks will be displayed here.</p>
      </div>
    </div>
  );
};

export default TasksPage;
