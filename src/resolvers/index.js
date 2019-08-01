
'use strict'

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
    accounts: () => ''
    account(): (parent, args) => ''
    subgraphs: () => ''
    subgraph(address, name): (parent, args) => ''
    nodes: () => ''
  }

}

module.exports = resolvers;
