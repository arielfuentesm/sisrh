import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Componentes/Login';
import Inicio from './Componentes/Inicio';

function AppContainer() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inicio" component={<Inicio/>} />
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<AppContainer />, rootElement);

