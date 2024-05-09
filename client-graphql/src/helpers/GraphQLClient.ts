import { ApolloClient, InMemoryCache } from "@apollo/client";

//npm i --save-dev @types/node
export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT!,
  cache: new InMemoryCache(),
});
