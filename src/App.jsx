import React from 'react';
import './App.css';
import { AppRoutes } from './core/routes';
import { Header } from './components/Header';
import { CartContextProvider } from './core/context/CartContext';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { auth as authReducer } from './core/store/reducer';

const store = createStore(authReducer);

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CartContextProvider>
          <Header />
          <AppRoutes />
        </CartContextProvider>
      </div>
    </Provider>
  );
}

export default App;
