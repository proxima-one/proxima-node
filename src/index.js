const { GraphQLServer } = require('graphql-yoga')

const typeDefs = './src/schema/index.graphql'
const resolvers = require('./resolvers/index.js')



const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
