import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../../../../constants/env';
import { token } from '../../../../helpers/auth';
import useFetch from '../../../../hooks/useFetch';
import Loader from '../../../atoms/Loader';

const Table = () => {
  const { data, loading, error } = useFetch('public/products');

  const deleteProduct = (product) => {
    if (window.confirm('Estás seguro de eliminar?')) {
      axios
        .delete(`${API_URL}/admin/products/${product.id}`, {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        })
        .then(() => alert('Producto eliminado'));
    }
  };

  if (loading) return <Loader />;
  if (error) return <div>{error?.message}</div>;

  return (
    <div className="max-w-200 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl mb-6">Productos</h1>
        <div className="pt-1 mb-12 pb-1">
          <Link
            className="bg-gradient p-2 m-2 text-white"
            to="/admin/productos/crear"
          >
            Agregar producto
          </Link>
        </div>
        <table className="overflow-x-scroll w-full">
          <thead className="bg-gradient text-white">
            <tr>
              <th className="text-center">Nombre</th>
              <th className="text-center">Precio</th>
              <th className="text-center">Editar</th>
              <th className="text-center">Borrar</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan={4}>No existen productos actualmente</td>
              </tr>
            )}
            {data.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.product_name}</td>
                <td className="text-center">{prod.price}</td>
                <td className="text-center">
                  <Link to={`/admin/productos/editar/${prod.id}`}>Editar</Link>
                </td>
                <td className="text-center">
                  <a
                    className="text-red-600 hover:cursor-pointer"
                    onClick={() => deleteProduct(prod)}
                  >
                    Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Table;
