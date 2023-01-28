import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../constants/env';
import { CartContext } from '../../context/CartContext';

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState('');
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    axios.get(`${API_URL}/public/products/${params.id}`).then((resp) => {
      setProduct(resp.data.data);
    });
  }, []);

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };
  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });
  };
  return (
    <div>
      <h1>Producto: {product?.product_name}</h1>
      <p>{JSON.stringify(product)}</p>
      <button className="bg-gradient text-white p-2 m-2" onClick={addToCart}>
        AGREGAR AL CARRITO
      </button>
      <button
        className="bg-gradient text-white p-2 m-2"
        onClick={removeFromCart}
      >
        QUITAR DEL CARRITO
      </button>
    </div>
  );
};

export default Product;
