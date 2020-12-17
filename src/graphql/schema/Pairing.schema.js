export const types = `
  type Pairing {
    team1: Team!
    team2: Team!
    winner: String
    id: ID!
    createdAt: String!
  }

  type PairingPayload {
    docs: [Pairing]!
    totalDocs: Int!
    offset: Int!
    limit: Int!
    totalPages: Int!
    page: Int!
    pagingCounter: Int!
  }

`

export const queries = `
  getPairing(paginate: Paginate): PairingPayload
`

export const mutations = `
  
`