import React, { useRef, useEffect } from 'react';
import './login.css';
const Login = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const signUpButton = containerRef.current.querySelector('#signUp');
    const signInButton = containerRef.current.querySelector('#signIn');

    signUpButton.addEventListener('click', () => {
      containerRef.current.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      containerRef.current.classList.remove('right-panel-active');
    });
  }, []);

  return (
    <div className="container" id="container" ref={containerRef}>
      <h1>Iniciar Sesión</h1>
      <span>o usa tu email</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Contraseña" />
      <a href="#">Olvidaste tu contraseña?</a>
      <button>Iniciar sesión</button>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>¡Bienvenido!</h1>
            <p>Inicia sesión con tu cuenta</p>
            <button className="ghost" id="signIn">Inicia sesión</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hola!!!</h1>
            <p>Crear tu cuenta</p>
            <button className="ghost" id="signUp">Registrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



