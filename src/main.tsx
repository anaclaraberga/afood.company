import Home from './pages/Home';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
