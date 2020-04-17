import React from 'react';
import './App.css';
import { AppRoutes } from './core/routes';
import { Header } from './components/Header';
import { CartContextProvider } from './core/context/CartContext';

function App() {
  return (
    <div className='App'>
      <CartContextProvider>
        <Header />
        <AppRoutes />
      </CartContextProvider>
    </div>
  );
}

export default App;
