import { Producto } from "..";
import "./ComponentsStyles.css";

export const CardProduct = ({ product }: { product: Producto }) => {
  return (
    <div className="cardProduct">
      <h3>{product.nombre}</h3>
      <p>{product.precio}</p>
      <p>{product.cantidad}</p>
    </div>
  );
};
