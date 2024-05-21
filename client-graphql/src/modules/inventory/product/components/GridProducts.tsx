import { useQuery } from "@apollo/client";
import { Producto } from "../data/Product";
import { getProducts } from "../graphql/querys.graphql";
import { CardProduct } from "./CardProduct";
import "./ComponentsStyles.css";
import { useEffect, useState } from "react";
import { NuevoProducto } from "./NuevoProducto";

export const GridProducts = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const { data, error, loading, refetch } = useQuery(
    getProducts({ args: ["id", "nombre", "precio", "cantidad"] })
  );

  useEffect(() => {
    refetch();
  },);

  useEffect(() => {
    if (data) {
      setProductos(data.getProductos);
    }
  }, [data]);

  return error ? (
    <>
      <h1>Error {error.message}</h1>
    </>
  ) : loading ? (
    <p>Cargando productos...</p>
  ) : (
    <>
      <NuevoProducto />
      <div className="gridProducts">
        {productos.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
