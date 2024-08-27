import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskDetails from './TaskDetails';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTaskName, setNewTaskName] = useState('');

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleCheckboxClick = (taskId) => {
    const taskToUpdate = tasks.find(task => task.id === taskId) || completedTasks.find(task => task.id === taskId);

    if (taskToUpdate) {
      const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };

      if (updatedTask.completed) {
        setTasks(tasks.filter(task => task.id !== taskId));
        setCompletedTasks([...completedTasks, updatedTask]);
      } else {
        setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
        setTasks([...tasks, updatedTask]);
      }
    }
  };

  const handleStarClick = (taskId) => {
    const taskToUpdate = tasks.find(task => task.id === taskId) || completedTasks.find(task => task.id === taskId);

    if (taskToUpdate) {
      const updatedTask = { ...taskToUpdate, important: !taskToUpdate.important };

      if (taskToUpdate.completed) {
        setCompletedTasks(completedTasks.map(task =>
          task.id === taskId ? updatedTask : task
        ));
      } else {
        setTasks(tasks.map(task =>
          task.id === taskId ? updatedTask : task
        ));
      }
    }
  };

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      const newTask = {
        id: Date.now(),
        name: newTaskName,
        completed: false,
        important: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
    }
  };

  return (
    <div className="task-list-container">
      <div className="task-input">
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="tasks-section">
        <div className="tasks">
          <h3>Tasks</h3>
          {tasks.length === 0 ?  <p>No tasks available.</p> : (
            tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onCheckboxClick={() => handleCheckboxClick(task.id)}
                onStarClick={() => handleStarClick(task.id)}
                onClick={() => handleTaskClick(task)}  // Handle task click
              />
            ))
          )}
        </div>

        <h3>Completed</h3>
        <div className="completed-tasks">
          {completedTasks.length === 0 ? <p>No completed tasks.</p> : (
            completedTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onCheckboxClick={() => handleCheckboxClick(task.id)}
                onStarClick={() => handleStarClick(task.id)}
                onClick={() => handleTaskClick(task)}  // Handle task click
              />
            ))
          )}
        </div>
      </div>

      {/* Display task details on the right */}
      {selectedTask && (
        <div className="task-details-container">
          <TaskDetails task={selectedTask} />
        </div>
      )}
    </div>
  );
};

export default TaskList;
