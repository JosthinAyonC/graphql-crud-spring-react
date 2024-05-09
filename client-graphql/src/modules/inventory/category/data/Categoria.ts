import { Producto } from "../../product";

export interface Categoria {
  id: number;
  nombre: string;
  productos: Producto[];
}
