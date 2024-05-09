import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../graphql/querys.graphql";
import { useQuery } from "@apollo/client";
import { Producto } from "..";
import { useEffect, useState } from "react";

export const ProductByIdPage = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState<Producto>({} as Producto);

  const { data, error, loading, refetch } = useQuery(
    getProductById({
      productArgs: ["id", "nombre", "precio", "cantidad"],
      categoriaArgs: ["nombre"],
      id: id!,
    })
  );

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data) {
      setProducto(data.getProductoById);
    }
  }, [data]);

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Producto {producto.nombre}</h1>
      <hr />
      {error ? (
        <h1>Error {error.message}</h1>
      ) : loading ? (
        <p>Cargando producto...</p>
      ) : (
        <div>
          <h3>{producto.nombre}</h3>
          <p>
            <strong>Categoria: </strong>
            {producto.categoriaId?.nombre || "Sin categoría"}{" "}
          </p>
          <small className="small">id: {producto.id}</small>
          <button onClick={handleReturn}>Volver</button>
        </div>
      )}
    </>
  );
};
