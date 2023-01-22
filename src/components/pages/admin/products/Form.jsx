import React from 'react';
import { API_URL } from '../../../../constants/env';
import { token } from '../../../../helpers/auth';
import axios from 'axios';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      product_name: e.target.productName.value,
      price: Number(e.target.price.value),
      images: [e.target.image.value],
      description: e.target.description.image,
      features: {
        color: e.target.color.value,
      },
    };

    axios
      .post(`${API_URL}/admin/products`, data, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((resp) => {
        console.log(resp);
        alert('Producto CReado');
      })
      .catch((err) => {
        console.log(err);
        alert('Error al Crear producto');
      });
  };
  return (
    <div>
      <h1>Crear producto</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productName" placeholder="Nombre" required />
        <input type="number" name="price" placeholder="Precio" required />
        <input type="url" name="image" placeholder="Imagen" required />
        <textarea name="description" cols="30" rows="10" required />

        <input type="text" name="color" placeholder="Color" required />
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default Form;
