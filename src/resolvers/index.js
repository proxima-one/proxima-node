
'use strict'

let Accounts = [{
  address: "address",
  stake: 10.0,
  storage: 1.0,
  usage: 0.1
}]

let Subgraphs = [{
  name: "name",
  owner: "address",
  availability: 10.0,
  storage: 1.0,
  id: "id",
  stake: 0.1,
}]

const resolvers = {
  Query: {
    accounts: () => Accounts,
    account: (parent, args) => Accounts[0],
    subgraphs: () => Subgraphs,
    subgraph: (parent, args) => Subgraphs[0],
    nodes: () => Accounts,
  },
  Account: {
    address: (parent) =>parent.address,
    stake: (parent) =>parent.stake,
    storage: (parent) =>parent.storage,
    usage: (parent) =>parent.usage
  },
  Subgraph: {
    name: (parent) => parent.name,
    owner: (parent) =>parent.owner,
    availability:(parent) => parent.availability,
    storage: (parent) =>parent.storage,
    id: (parent) =>parent.id,
    stake: (parent) =>parent.stake

  }


}

module.exports = resolvers;
