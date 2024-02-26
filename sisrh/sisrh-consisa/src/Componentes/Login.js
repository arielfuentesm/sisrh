import React, { useRef, useEffect, useState } from 'react';
import './login.css';

const Login = () => {
  const containerRef = useRef(null);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const signUpButton = containerRef.current.querySelector('#signUp');
    const signInButton = containerRef.current.querySelector('#signIn');

    signUpButton.addEventListener('click', () => {
      containerRef.current.classList.add('right-panel-active');
      setIsSignUp(true);
    });

    signInButton.addEventListener('click', () => {
      containerRef.current.classList.remove('right-panel-active');
      setIsSignUp(false);
    });
  }, []);

  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container" ref={containerRef}>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Iniciar Sesión</h1>
          <span>Utilice su Nombre de Usuario</span>
          <input type="user" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <a href="#">¿Olvidó su contraseña?</a>
          <button>Iniciar sesión</button>
        </form>
      </div>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>{isSignUp ? 'Registrar' : 'Crear tu cuenta'}</h1>
          <span>Ingrese los siguientes Datos</span>
          <input type="text" placeholder="Usuario" />
          <input type="name" placeholder="Nombre Completo" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <input type="confpassword" placeholder="Confirmar Contraseña" />
          <button id="lila">Registrar</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>¡Bienvenido Nuevamente a  GRUPO CONSISA!</h1>
            <p>Inicie Sesión con su cuenta</p>
            <button className="ghost" id="signIn">Inicia sesión</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Bienvenido a GRUPO CONSISA</h1>
            <p>¿No tienes cuenta?</p>
            <button className="ghost" id="signUp">Registrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
