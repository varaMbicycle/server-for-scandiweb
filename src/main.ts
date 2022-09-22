import typeDefs from "./schema";
import resolvers from "./resolvers";

import express from 'express';
import  { ApolloServer } from "apollo-server-express";

const server = new ApolloServer( {
    typeDefs,
    resolvers,
});

const app = express();

server.start().then( () => {
    server.applyMiddleware({ app });
    app.get("*", (_: any, res: { redirect: (arg0: string) => void; }) => {
        res.redirect("/graphql");
    });

    app.listen( 4000,() =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );

})

