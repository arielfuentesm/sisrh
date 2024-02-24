import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Componentes/Login';

function AppContainer() {
  return (
    <div className="app">
      <Login />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<AppContainer />, rootElement);
