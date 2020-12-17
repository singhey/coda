import { buildSchema }  from 'graphql'
import * as Team from './Player.schema'
import * as Pairing from './Pairing.schema'

const types = []
const queries = []
const mutations = []

const schemas = [Team, Pairing]

schemas.forEach(s => {
  types.push(s.types)
  queries.push(s.queries)
  mutations.push(s.mutations)
})


export default buildSchema(`
  ${types.join('\n')}

  type Query {
    ${queries.join("\n")}
  }

  type Mutation {
    ${mutations.join("\n")}
  }

`)