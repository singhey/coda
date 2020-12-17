import Team from './Team.resolver'
import Pairing from './Pairing.resolver'
// import { GraphQLUpload, graphqlUploadExpress } from 'graphql-upload'

export default {
  ...Team,
  ...Pairing
  // Upload: GraphQLUpload,
};