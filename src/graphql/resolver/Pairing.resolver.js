import Pairing from "../model/Pairing"
import { batchTeamLoader } from "./Team.resolver"

function returnPairingWithAttachments(item) {
  return {
    ...item._doc,
    team1: batchTeamLoader.bind(this, item._doc.team1),
    team2: batchTeamLoader.bind(this, item._doc.team2),
    id: item._doc._id
  }
}

export default {
  getPairing: async({paginate}) => {
    try {
      const pairing = await Pairing.paginate({}, {...paginate})
      return {
        ...pairing,
        docs: pairing.docs.map(item => returnPairingWithAttachments(item)),
      }
    }catch(err) {
      throw err
    }
  }
}