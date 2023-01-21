import useFecth from '../../hooks/useFetch';

const Products = () => {
  const { data, error, loading } = useFecth('public/products');

  if (loading) {
    return <h1>CARGANDO...</h1>;
  }

  if (error) {
    return <h1>Error en la petición de productos.</h1>;
  }

  return (
    <div>
      <h1>Products</h1>
      {data.length === 0 ? (
        <p>No existen productos.</p>
      ) : (
        data.map((prod) => <div>{JSON.stringify(prod)}</div>)
      )}
    </div>
  );
};

export default Products;
