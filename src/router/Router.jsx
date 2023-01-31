import { createBrowserRouter } from 'react-router-dom';
import Form from '../components/pages/admin/products/Form';
import Table from '../components/pages/admin/products/Table';
import Cart from '../components/pages/Cart';
import Error404 from '../components/pages/Error404';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Product from '../components/pages/Product';
import Products from '../components/pages/Products';
import Register from '../components/pages/Register';
import Admin from '../components/templates/Admin';
import App from '../components/templates/App';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/productos/:id',
        element: <Product />,
      },
      {
        path: '/carrito',
        element: <Cart />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registro',
    element: <Register />,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/admin/productos/crear',
        element: <Form />,
      },
      ,
      {
        path: '/admin/productos/editar/:id',
        element: <Form />,
      },
      {
        path: '/admin/productos',
        element: <Table />,
      },
    ],
  },
]);

export default router;
