import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  behavior: String,
  level: String,
  species: String,
})

// Compile the schema into a model and export it
const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}