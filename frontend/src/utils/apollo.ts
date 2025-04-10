import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({

    // TODO: move to environment
    uri: 'http://localhost:8000/graphql',

    cache: new InMemoryCache(),

});
