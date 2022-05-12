const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { products, categories, reviews } = require('./db');
const { Query } = require('./resolvers/Query');
const { Category } = require('./resolvers/Category');
const { Product } = require('./resolvers/Product');
const { Mutation } = require('./resolvers/Mutation');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Mutation,
  },
  context: {
    products,
    categories,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log('Server ready at ' + url);
});
