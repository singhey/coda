import Team from "../model/Players.model"
import DataLoader from 'dataloader'
import _ from 'lodash'
import Pairing from "../model/Pairing"


const batchTeam = async (ids) => {
  // console.log(ids, a)
  // console.log(ids)
  let teams = await Team.find({_id: {$in: ids}})
  // console.log(dishes)
  const gs = _.groupBy(teams, '_id');
  // gs = {1: [{text:'hi', boardId: 1}], 2: [{text: 'bye', boardId: 2}, {text: 'bye2'. boardId: 2}]}
  // console.log(gs)
  return ids.map(k => gs[k][0] || {});
}
export const batch = new DataLoader(batchTeam)
export const batchTeamLoader = (id) => {
  // console.log(id)
  return batch.load(id)
}

export default {
  addTeam: async({data}, req) => {
    try {
      const exists = await Team.findOne({team: data.team})
      // console.log(exists)
      if(exists) {
        throw new Error("Team with this name already exists")
      }
      const team = new Team({
        ...data
      })
      await team.save()
      // console.log(team)
      return {team, message: "Team added successfully"}
    }catch(err) {
      throw err
    }
  },
  getTeams: async({sort, filter = {team: ""}, paginate}) => {
    try {
      // console.log({...filter})
      const team = await Team.paginate({team: {$regex: new RegExp("^" + filter.team.toLowerCase(), "i") } }, {...paginate, sort})
      return team
    }catch(err) {
      throw err
    }
  },
  compete: async({data}) => {
    try {
      let {team1, team2, winner} = data
      const teams = await Team.find({_id: {$in: [team1.toString(), team2.toString()]}})
      // console.log(teams)
      team1 = teams.filter(team => team._id.toString() === team1.toString())[0]
      team2 = teams.filter(team => team._id.toString() === team2.toString())[0]
      if(!team1) {
        throw new Error("Team 1 doesn't exist")
      }
      if(!team2) {
        throw new Error("Team 2 doesn't exist")
      }
      if(winner.toString() === team1._id.toString()){
        team1.score += 3
        team1.wins += 1
        team2.losses += 1
        const pairing = new Pairing({
          team1: team1._id,
          team2: team2._id,
          winner: "TEAM1"
        })
        await pairing.save()
      }else if(winner.toString() === team2._id.toString()){
        team2.score += 3
        team2.wins += 1
        team1.losses += 1
        const pairing = new Pairing({
          team1: team1._id,
          team2: team2._id,
          winner: "TEAM2"
        })
        await pairing.save()
      }else if(winner === "TIE") {
        team1.score += 1
        team2.score += 1
        team1.tie += 1
        team2.tie += 1
        const pairing = new Pairing({
          team1: team1._id,
          team2: team2._id,
          winner: "TIE"
        })
        await pairing.save()
      }

      await team1.save()
      await team2.save()
      return {team1, team2, message: "Scores updated"}
    }catch(err) {
      throw err
    }
  }
}