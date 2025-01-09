import React, { useEffect, useState } from 'react';
import './App.css';
import clickSound from '../public/Sounds/mouse-click-104737.mp3'; 
import deleteSound from '../public/Sounds/trash-can-101339.mp3';

function App() {
  const [date, setDate] = useState(new Date());
  const [todo, setTodo] = useState('');
  const [time, setTime] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const playAddSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const playDeleteSound = () => {
    const audio = new Audio(deleteSound);
    audio.play();
  };

  const addTask = () => {
    if (todo.trim() !== '' && time.trim() !== '') {
      setTodos([...todos, { task: todo, time, completed: false }]);
      setTodo('');
      setTime('');
      playAddSound();
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((item, idx) =>
      idx === index ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
    playDeleteSound();
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1 className='text-white'>Plan Your Day</h1>
        <h3>
          Today's Date: <span className="highlight">{date.toLocaleDateString()}</span>
        </h3>
      </div>

      <div className="input-section">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          className="task-input"
          placeholder="What do you want to do?"
        />
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="time"
          className="time-input"
        />
        <button onClick={addTask} className="add-task-btn bg-primary">
          Add Task
        </button>
      </div>

      <div className="task-container">
        {todos.length > 0 ? (
          todos.map((item, index) => (
            <div
              key={index}
              className={`task-item ${item.completed ? 'completed' : ''}`}
            >
              <div className="task-details">
                <span className="task-text">{item.task}</span>
                <span className="task-time">{item.time}</span>
              </div>
              <div className="actions">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(index)}
                />
                <button className="delete-btn" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-tasks">No tasks yet! Add your first task.</p>
        )}
      </div>
    </div>
  );
}

export default App;