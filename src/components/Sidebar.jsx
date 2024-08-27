import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="/path-to-profile-image.jpg" alt="Profile" />
        <h2>Hey, ABCD</h2>
      </div>
      <ul>
        <li>All Tasks</li>
        <li>Today</li>
        <li>Important</li>
        <li>Planned</li>
        <li>Assigned to me</li>
        <li className="add-list">+ Add list</li>
      </ul>
      <div className="today-tasks">
        <h3>Today Tasks</h3>
        <div className="task-count">11</div>
      </div>
    </div>
  );
};

export default Sidebar;
