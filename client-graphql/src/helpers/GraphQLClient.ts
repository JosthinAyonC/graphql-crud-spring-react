import { ApolloClient, InMemoryCache } from "@apollo/client";

//npm i --save-dev @types/node
export const client = new ApolloClient({
  uri: "http://localhost:8080/g/graphql",
  cache: new InMemoryCache(),
});
