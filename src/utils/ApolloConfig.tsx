import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://profound-marmot-29.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});