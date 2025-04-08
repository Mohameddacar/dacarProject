import React, { useState, useEffect } from 'react';
import './index.css';

const App = () => {
  const [input, setInput] = useState('');
  const [allarr, setAllarr] = useState([]);

  // Load tasks on first render
  useEffect(() => {
    const savedData = localStorage.getItem('taskList');
    if (savedData) {
      setAllarr(JSON.parse(savedData));
    }
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(allarr));
  }, [allarr]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input.trim() !== '') {
      setAllarr([...allarr, input]);
      setInput('');
    } else {
      alert('Please enter a task');
    }
  };

  const handleDelete = (index) => {
    const arr = [...allarr];
    arr.splice(index, 1);
    setAllarr(arr);
  };

  const handleUpdate = (index) => {
    const updatedValue = prompt('Enter new value:', allarr[index]);
    if (updatedValue !== null && updatedValue.trim() !== '') {
      const arr = [...allarr];
      arr[index] = updatedValue;
      setAllarr(arr);
    } else {
      alert('Please enter a valid value');
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      setAllarr([]);
      localStorage.removeItem('taskList');
    }
  };

  return (
    <div className="container">
      <h2>Task Manager</h2>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter your task"
        />
        <button onClick={handleClick}>Add</button>
      </div>

      {allarr.length > 0 && (
        <>
          <ul>
            {allarr.map((item, index) => (
              <li key={index}>
                {item}
                <span className="btn-group">
                  <button onClick={() => handleUpdate(index)}>Update</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </span>
              </li>
            ))}
          </ul>
          <button className="clear-btn" onClick={handleClearAll}>
            Clear All Tasks
          </button>
        </>
      )}
    </div>
  );
};

export default App;
