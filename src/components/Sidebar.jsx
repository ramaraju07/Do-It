import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-info">
        <img src="user-avatar.png" alt="User Avatar" />
        <p>Hey, ABCD</p>
      </div>
      <div className="side">
      <nav>
        <ul>
          <li>All Tasks</li>
          <li>Today</li>
          <li>Important</li>
          <li>Planned</li>
          <li>Assigned to me</li>
          </ul></nav></div>
          <div className="side">
            <nav><ul>
          <li>Add list</li>
        </ul>
        </nav>
        </div>
        <div className="sidei">
        <h3>Today Tasks</h3>
        <span>11</span>
        <hr/>
        <div className="task-stats">
          <div className="task-chart"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
