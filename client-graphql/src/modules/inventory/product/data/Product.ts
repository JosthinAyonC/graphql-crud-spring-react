import { Categoria } from "../../category";

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
  categoriaId: Categoria;
}
