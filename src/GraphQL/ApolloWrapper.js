"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://demo1.okhub.tech/graphql",
    cache: new InMemoryCache(),
});

const ApolloWrapper = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
