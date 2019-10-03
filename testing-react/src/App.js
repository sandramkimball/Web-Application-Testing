import React from 'react';
import Dashboard from './components/dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CURRENT GAME STATS</h1>
      </header>
      <section className="App-dash">
        <Dashboard/>
      </section>
    </div>
  );
}

export default App;
