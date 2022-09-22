import { ApolloServer } from "apollo-server-express"
import express from 'express'

import typeDefs from './schema';
import resolvers from './resolvers';

const app = express()
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});

server.applyMiddleware({app, cors: false})
app.listen(80, () => console.log('server stated on port: 80'))
