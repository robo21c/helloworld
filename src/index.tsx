import React from 'react';
import ReactDOM from 'react-dom'; // createRoot를 사용하기 위해 변경
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
