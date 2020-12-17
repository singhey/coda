export const types = `
  type Team {
    team: String!
    id: ID!
    wins: Int!
    losses: Int!
    tie: Int!
    score: Int!
  }

  input TeamInput {
    team: String!
  }

  type GetTeamsPayload {
    docs: [Team]!
    totalDocs: Int!
    offset: Int!
    limit: Int!
    totalPages: Int!
    page: Int!
    pagingCounter: Int!
  }

  input TeamSort {
    score: Sort
    tie: Sort
    losses: Sort
    wins: Sort
    team: Sort
  }

  input TeamFilter {
    team: String
  }

  type TeamPayload{
    team: Team
    message: String
  }

  input Paginate {
    page: Int!
    limit: Int!
  }

  enum Sort {
    asc
    desc
  }
  
  type CompetePayload {
    team1: Team!
    team2: Team!
  }

  input CompeteInput {
    team1: ID!
    team2: ID!
    winner: String!  
  }

`

export const queries = `
  getTeams(filter: TeamFilter, sort: TeamSort, paginate: Paginate): GetTeamsPayload
`

export const mutations = `
  addTeam(data: TeamInput!): TeamPayload!
  compete(data: CompeteInput!): CompetePayload
`