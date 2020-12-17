import mongoose from 'mongoose'
import { Schema } from 'mongoose';
const mongoosePaginate = require('mongoose-paginate-v2');

let PairingSchema = new mongoose.Schema({
  team1: {
    type: Schema.Types.ObjectId,
    required: true
  },
  team2: {
    type: Schema.Types.ObjectId,
    required: true
  },
  winner: {
    type: String,
    enum: ["TEAM1", "TEAM2", "TIE"]
  }
}, {timestamps: {}})

PairingSchema.plugin(mongoosePaginate)
let Pairing = mongoose.model('Pairing', PairingSchema)

export default Pairing;