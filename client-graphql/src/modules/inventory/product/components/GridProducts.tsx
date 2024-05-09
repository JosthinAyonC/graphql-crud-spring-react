import { Producto } from "../data/Product";
import { CardProduct } from "./CardProduct";
import "./ComponentsStyles.css";

export const GridProducts = () => {
  const products: Producto[] = [
    {
      id: "DSAJDKAQJH2312131341",
      nombre: "Producto 1",
      precio: 100,
      cantidad: 10,
      categoriaId: {
        id: 1,
        nombre: "Categoria 1",
        productos: [],
      },
    },
    {
      id: "DSAJDKAQJH2312131341",
      nombre: "Producto 2",
      precio: 200,
      cantidad: 20,
      categoriaId: {
        id: 1,
        nombre: "Categoria 1",
        productos: [],
      },
    },
    {
      id: "DSAJDKAQJH2312131341",
      nombre: "Producto 3",
      precio: 300,
      cantidad: 30,
      categoriaId: {
        id: 1,
        nombre: "Categoria 1",
        productos: [],
      },
    },
  ];

  return (
    <>
      <div className="gridProducts">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
