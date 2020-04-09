import React from 'react';
import './App.css';
import { AppRoutes } from './core/routes';

function App() {
  console.log('app');
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Królik</h2>
      </header>
      <AppRoutes />
    </div>
  );
}

export default App;
