import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants/env';
import { setToken } from '../../helpers/auth';
import LoginTemplate from '../templates/LoginTemplate';
const Register = () => {
  const nav = useNavigate();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      details: {
        fullname: e.target.fullname.value,
      },
    };

    axios
      .post(`${API_URL}/public/users`, data)
      .then((resp) => {
        nav('/login');
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  return (
    <LoginTemplate title="Registrarse">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre Completo"
            name="fullname"
            required
            className="w-full border-2  p-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            required
            className="w-full border-2 p-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            required
            className="w-full border-2 p-2"
          />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
          <button
            className="bg-gradient mb-2 p-2 w-full text-white"
            type="submit"
          >
            Registrarse
          </button>
          <Link className="text-gray-500" to="/login">
            ¿Ya tienes una cuenta? Iniciar Sesión
          </Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 text-red-800">
            {error?.response?.data?.errors[0]?.message}
          </p>
        )}
      </form>
    </LoginTemplate>
  );
};

export default Register;
