import { ApolloProvider as AP, ApolloClient, InMemoryCache } from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
    // TODO: move to environment
    uri: "http://localhost:8000/graphql",

    cache: new InMemoryCache(),
});

const ApolloProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <AP client={client}>
            {children}
        </AP>
    )
}

export default ApolloProvider;