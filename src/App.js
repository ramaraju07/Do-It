import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <span className="menu-icon" onClick={toggleSidebar}>
        ☰
      </span>
      {sidebarOpen && <Sidebar />}
      <div className={`main-content ${sidebarOpen ? 'with-sidebar' : ''}`}>
        <header className="header">
          <h1>Task Manager</h1>
        </header>
                  <TaskList />

        <div className="content">
        </div>
      </div>
    </div>
  );
};

export default App;
