import React from 'react';
import './TaskDetails.css';
import { FaPlusCircle, FaBell, FaCalendar, FaRedo, FaStar, FaTimes, FaTrash } from 'react-icons/fa';

const TaskDetails = ({ task, onClose, onDelete }) => {
  if (!task) {
    return <div className="task-details-empty">No Task Selected</div>;
  }

  const handleStarClick = () => {
    // Functionality for toggling importance goes here
    alert('Toggle importance');
  };

  return (
    <div className="task-details">
      <div className="task-details-header">
        <h3>{task.title}</h3>
        <div className="task-details-actions">
          <span className="star" onClick={handleStarClick}>
            {task.important ? '★' : '☆'}
          </span>
          <FaTimes className="close-icon" onClick={onClose} />
        </div>
      </div>
      <ul className="task-details-options">
        <li><FaPlusCircle className="icon" /> Add Step</li>
        <li><FaBell className="icon" /> Set Reminder</li>
        <li><FaCalendar className="icon" /> Add Due Date</li>
        <li><FaRedo className="icon" /> Repeat</li>
      </ul>
      <div className="task-details-notes">
        <textarea placeholder="Add Notes"></textarea>
      </div>
      <div className="task-details-footer">
        <FaTrash className="delete-icon" onClick={onDelete} />
      </div>
    </div>
  );
};

export default TaskDetails;
