import { Producto } from "..";
import "./ComponentsStyles.css";

export const CardProduct = ({ product }: { product: Producto }) => {
  return (
    <div className="cardProduct">
      <h3>{product.nombre}</h3>
      <p>
        <strong>Precio: </strong>
        {product.precio}
      </p>
      <p>
        <strong>Cantidad: </strong>
        {product.cantidad}
      </p>
      <small className="small">id: {product.id}</small>
    </div>
  );
};
