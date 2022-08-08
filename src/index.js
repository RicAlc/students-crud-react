import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import logo from './assets/logo.png';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <nav className='navbar'>
          <img src={logo} alt='logo' />
          <h1>CRUD project</h1>
        </nav>
      </header>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
