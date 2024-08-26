import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TaskDetails.css';

const TaskDetails = ({ task, onClose }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dueDate, setDueDate] = useState(null);

  const handleDateChange = (date) => {
    setDueDate(date);
    setShowDatePicker(false);
  };

  return (
    <div className="task-details">
      <div className="task-details-header">
        <input type="checkbox" checked={task.completed} />
        <span>{task.name}</span>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <div className="task-details-body">
        <button>Add Step</button>
        <button>Set Reminder</button>
        <button onClick={() => setShowDatePicker(!showDatePicker)}>
          Add Due Date
        </button>
        {showDatePicker && (
          <DatePicker
            selected={dueDate}
            onChange={handleDateChange}
            inline
          />
        )}
        <button>Repeat</button>
        <textarea placeholder="Add Notes"></textarea>
      </div>
      <div className="task-details-footer">
        <span>Created Today</span>
        <button className="delete-btn">🗑</button>
      </div>
    </div>
  );
};

export default TaskDetails;
