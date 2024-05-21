import { gql } from "@apollo/client";

export const getProducts = ({ args }: { args: string[] }) => gql`
    query {
        getProductos{
        ${args}
        }
    }
`;

// En querys.graphql
export const getProductById = ({
  productArgs,
  categoriaArgs,
  id,
}: {
  productArgs: string[];
  categoriaArgs: string[];
  id: string;
}) => gql`
      query {
        getProductoById(id: "${id}") {
          ${productArgs}
          categoriaId {
            ${categoriaArgs}
          }
        }
      }
`;

// Add product
export const ADD_PRODUCTO = gql`
  mutation AddProducto($productoReq: ProductoRq!) {
    addProducto(productoReq: $productoReq) {
      id
      nombre
      precio
      cantidad
      categoriaId {
        id
        nombre
      }
    }
  }
`;
