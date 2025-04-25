import {
  ApolloProvider as AP,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

export const ApolloProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <AP client={client}>{children}</AP>;
};
