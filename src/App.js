import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [deployments, setDeployments] = useState([]);

  // Mock deployment history
  useEffect(() => {
    setDeployments([
      { id: 1, date: '2024-01-16', status: 'success', commit: 'Initial deployment' },
      { id: 2, date: '2024-01-16', status: 'success', commit: 'Add CI/CD pipeline' },
      { id: 3, date: '2024-01-16', status: 'success', commit: 'Add tests and linting' }
    ]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 CI/CD Pipeline Demo</h1>
        <p className="subtitle">Automated Deployment with GitHub Actions & GitHub Pages</p>
        
        <div className="demo-section">
          <h2>Interactive Demo</h2>
          <div className="counter">
            <p>Count: {count}</p>
            <div className="buttons">
              <button onClick={() => setCount(count + 1)}>Increment</button>
              <button onClick={() => setCount(count - 1)}>Decrement</button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
        </div>

        <div className="pipeline-section">
          <h2>CI/CD Pipeline Steps</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Code Push</h3>
                <p>Developer pushes code to GitHub repository</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Continuous Integration</h3>
                <p>GitHub Actions automatically:
                  <ul>
                    <li>✅ Lints JavaScript code</li>
                    <li>✅ Runs unit tests</li>
                    <li>✅ Builds application</li>
                  </ul>
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Continuous Deployment</h3>
                <p>If all tests pass:
                  <ul>
                    <li>🚀 Auto-deploys to GitHub Pages</li>
                    <li>🌐 Site goes live immediately</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="deployment-section">
          <h2>Deployment History</h2>
          <div className="deployments">
            {deployments.map(deployment => (
              <div key={deployment.id} className={`deployment ${deployment.status}`}>
                <span className="date">{deployment.date}</span>
                <span className="status">{deployment.status}</span>
                <span className="commit">{deployment.commit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="info-section">
          <h2>Live Demo Instructions</h2>
          <ol>
            <li>Make a change to this code</li>
            <li>Commit and push to main branch</li>
            <li>Watch GitHub Actions automatically:
              <ul>
                <li>Run linting and tests</li>
                <li>Build the application</li>
                <li>Deploy to GitHub Pages</li>
              </ul>
            </li>
            <li>Refresh this page to see updates</li>
          </ol>
          
          <div className="links">
            <a href="https://github.com/Patrickmbaza/CI-CD-Demo/actions" target="_blank" rel="noopener noreferrer">
              View GitHub Actions
            </a>
            <a href="https://github.com/Patrickmbaza/CI-CD-Demo" target="_blank" rel="noopener noreferrer">
              View Source Code
            </a>
          </div>
          
          <p className="footer">
            Auto-deployed via GitHub Actions • Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;