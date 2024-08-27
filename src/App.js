import React, { useState } from 'react';
import './App.css';
import TaskDetails from './components/TaskDetails';
import { FaSearch, FaList, FaTh, FaSun, FaMoon, FaTasks, FaStar, FaCalendar, FaUser, FaPlus, FaBars } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', completed: false, important: false, dueDate: '' },
    { id: 2, title: 'Finish project report', completed: false, important: true, dueDate: '' },
    { id: 3, title: 'Call the bank', completed: false, important: false, dueDate: '' },
    { id: 4, title: 'Schedule dentist appointment', completed: false, important: false, dueDate: '' },
    { id: 5, title: 'Plan weekend trip', completed: false, important: false, dueDate: '' },
    { id: 6, title: 'Read a book', completed: true, important: false, dueDate: '' },
    { id: 7, title: 'Clean the house', completed: true, important: false, dueDate: '' },
    { id: 8, title: 'Prepare presentation', completed: true, important: false, dueDate: '' },
    { id: 9, title: 'Update blog', completed: true, important: false, dueDate: '' },
  ]);

  const [newTask, setNewTask] = useState('');
  const [isListView, setIsListView] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskItem = {
        id: Date.now(),
        title: newTask,
        completed: false,
        important: false,
        dueDate: selectedDate ? selectedDate.toISOString().split('T')[0] : '',
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
      setSelectedDate(null);
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, important: !task.important };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setSelectedTask(null); // Optionally clear selected task
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const todayDate = new Date().toISOString().split('T')[0];
  const todayTasksCount = tasks.filter((task) => task.dueDate === todayDate).length;

  const filteredTasks = tasks.filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleToggleView = () => setIsListView(!isListView);
  const handleToggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
  const toggleCalendar = () => setIsCalendarVisible(!isCalendarVisible);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="doit">
        <FaBars className="icon menu-icon" onClick={toggleSidebar} />
        <div className="project-title">Do-It</div>
      </div>
      {isSidebarVisible && (
        <div className={`sidebar ${isDarkMode ? 'dark-mode' : ''}`}>
          <div className="user-info">
            <div className="avatar">AB</div>
            <p><b>Hey, ABCD</b></p>
          </div>
          <ul className="menu">
            <li className="menu-item"><FaTasks className="icon" /> All Tasks</li>
            <li className="menu-item active"><FaCalendar className="icon" /> Today</li>
            <li className="menu-item"><FaStar className="icon" /> Important</li>
            <li className="menu-item"><FaCalendar className="icon" /> Planned</li>
            <li className="menu-item"><FaUser className="icon" /> Assigned to me</li>
          </ul>
          <ul className="menu-a">
            <li><FaPlus className="icon" /> Add List</li>
          </ul>
          <div className="today-tasks">
            <div className="task-count">
              <span>{todayTasksCount}</span>
              <span>{todayTasksCount > 1 ? ' Tasks' : ' Task'}</span>
            </div>
            <div className="task-progress">
              <span>{completedTasksCount} / {tasks.length}</span>
            </div>
          </div>
        </div>
      )}
      <div className="content">
        <div className="toolbar">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search tasks"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {isListView ? (
            <FaTh className="icon" onClick={handleToggleView} />
          ) : (
            <FaList className="icon" onClick={handleToggleView} />
          )}
          {isDarkMode ? (
            <FaSun className="icon" onClick={handleToggleDarkMode} />
          ) : (
            <FaMoon className="icon" onClick={handleToggleDarkMode} />
          )}
        </div>
        <div className="main-content">
          <div className={`task-list ${selectedTask ? 'with-details' : ''}`}>
            <h2>To Do</h2>
            <div className="add-task">
              <input
                type="text"
                placeholder="Add A Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button onClick={addTask}>ADD TASK</button>
            </div>
            <div className={`tasks ${isListView ? 'list-view' : 'card-view'}`}>
              {filteredTasks.filter((task) => !task.completed).map((task) => (
                <div
                  className={`task-card ${isListView ? 'list-item' : ''}`}
                  key={task.id}
                  onClick={() => setSelectedTask(task)}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
                  <span className={task.completed ? 'completed' : ''}>{task.title}</span>
                  <span
                    className="star"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleImportant(task.id);
                    }}
                  >
                    {task.important ? '★' : '☆'}
                  </span>
                </div>
              ))}
            </div>
            <div className="completed-tasks">
              <h3>Completed</h3>
              {filteredTasks.filter((task) => task.completed).map((task) => (
                <div
                  className={`completed-task ${isListView ? 'list-item' : ''}`}
                  key={task.id}
                  onClick={() => setSelectedTask(task)}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
                  <span className={task.completed ? 'completed' : ''}>{task.title}</span>
                  <span
                    className="star"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleImportant(task.id);
                    }}
                  >
                    {task.important ? '★' : '☆'}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {selectedTask && (
            <TaskDetails
              task={selectedTask}
              onClose={() => setSelectedTask(null)}
              onDelete={() => deleteTask(selectedTask.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
