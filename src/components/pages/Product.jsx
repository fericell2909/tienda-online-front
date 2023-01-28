import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../constants/env';

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState('');
  useEffect(() => {
    axios.get(`${API_URL}/public/products/${params.id}`).then((resp) => {
      setProduct(resp.data.data);
    });
  }, []);
  return (
    <div>
      <h1>Producto: {product?.product_name}</h1>
      <p>{JSON.stringify(product)}</p>
      <button className="bg-gradient text-white p-2 m-2">
        AGREGAR AL CARRITO
      </button>
      <button className="bg-gradient text-white p-2 m-2">
        QUITAR DEL CARRITO
      </button>
    </div>
  );
};

export default Product;
