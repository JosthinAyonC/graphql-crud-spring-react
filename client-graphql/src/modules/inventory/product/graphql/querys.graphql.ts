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
