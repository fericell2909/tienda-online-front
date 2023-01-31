import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { UserContext } from '../../../context/UserContext';
import { deleteToken, token } from '../../../helpers/auth';

const MainMenu = () => {
  const nav = useNavigate();

  const { UserData, setUserData } = useContext(UserContext);
  const { state } = useContext(CartContext);

  const handleSession = () => {
    deleteToken();
    setUserData();
    nav('/');
  };
  return (
    <>
      <nav className="w-full">
        <ul className="flex justify-end text-gray-100">
          <li className="flex items-center">
            <Link className="menu-item" to="/">
              Inicio
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="menu-item" to="/products">
              Productos
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="menu-item" to="/carrito">
              Carrito ({state?.cart?.length ?? 0})
            </Link>
          </li>
          {!token() ? (
            <>
              <li className="flex items-center">
                <Link className="menu-item" to="/login">
                  Iniciar Sesión
                </Link>
              </li>
            </>
          ) : (
            <>
              {UserData?.is_admin && (
                <li className="flex items-center">
                  <Link className="menu-item" to="/admin/productos">
                    Administrar productos
                  </Link>
                </li>
              )}

              <li className="flex items-center">
                <a onClick={handleSession} className="menu-item cursor-pointer">
                  Cerrar Sesión
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default MainMenu;
