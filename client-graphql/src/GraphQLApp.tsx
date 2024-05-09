import { ApolloProvider } from "@apollo/client";
import { GraphQLRouter } from "./router/GraphQLRouter";
import { client } from "./helpers/GraphQLClient";

export const GraphQLApp = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <GraphQLRouter />
      </ApolloProvider>
    </>
  );
};
