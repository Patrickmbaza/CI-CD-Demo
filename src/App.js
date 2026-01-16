import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CI/CD Demo Application</h1>
        <p>Automated Deployment with GitHub Actions</p>
        
        <div className="counter-section">
          <h2>Counter: {count}</h2>
          <div className="button-group">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>

        <div className="list-section">
          <h2>Items List</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <div className="add-item">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Enter new item"
              onKeyPress={(e) => e.key === 'Enter' && addItem()}
            />
            <button onClick={addItem}>Add Item</button>
          </div>
        </div>

        <div className="ci-cd-info">
          <h3>CI/CD Pipeline Status</h3>
          <p>Last deployed: {new Date().toLocaleDateString()}</p>
          <p>Auto-deploys on push to main branch</p>
          <a 
            href="https://github.com/yourusername/ci-cd-demo/actions" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View GitHub Actions
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;