import {
  ApolloProvider as AP,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
  // TODO: move to environment
  uri: import.meta.env.VITE_GRAPHQL_API_URL,
  
  cache: new InMemoryCache(),
});

const ApolloProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <AP client={client}>{children}</AP>;
};

export default ApolloProvider;
