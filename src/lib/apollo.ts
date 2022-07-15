import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/cl5l9lcp83u3101t726g5cl3m/master",
    cache: new InMemoryCache()
})