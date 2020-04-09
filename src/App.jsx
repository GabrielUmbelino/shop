import React from 'react';
import './App.css';
import { AppRoutes } from './core/routes';
import { Products } from './containers/product/Products';
function App() {
  console.log('app');
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Królik</h2>
      </header>
      <Products />
    </div>
  );
}

export default App;
