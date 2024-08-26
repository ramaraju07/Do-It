import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onCheckboxClick, onStarClick }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onCheckboxClick}
      />
      <span className={task.completed ? 'completed' : ''}>{task.name}</span>
      <span
        className={`star ${task.important ? 'important' : ''}`}
        onClick={onStarClick}
      >
        {task.important ? '★' : '☆'}
      </span>
    </div>
  );
};

export default TaskItem;
