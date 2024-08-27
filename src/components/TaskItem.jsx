import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onCheckboxClick, onStarClick, onTaskClick }) => {
  return (
    <div className="task-item" onClick={onTaskClick}>
      <div className="task-name">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => {
            e.stopPropagation(); 
            onCheckboxClick();
          }}
        />
        {task.name}
      </div>
      <div className="task-actions">
        <span
          className="star-icon"
          onClick={(e) => {
            e.stopPropagation(); 
            onStarClick();
          }}
        >
          {task.important ? '★' : '☆'}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
