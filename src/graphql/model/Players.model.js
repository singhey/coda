import mongoose from 'mongoose'
import { Schema } from 'mongoose';
const mongoosePaginate = require('mongoose-paginate-v2');

let TeamSchema = new mongoose.Schema({
  team: {
    type: String,
    index: true,
    unique: true
  },
  wins: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  },
  tie: {
    type: Number,
    default: 0
  },
  score: {
    type: Number,
    default:0
  }
}, {timestamps: {}})

TeamSchema.plugin(mongoosePaginate)
let Team = mongoose.model('Team', TeamSchema)

export default Team;