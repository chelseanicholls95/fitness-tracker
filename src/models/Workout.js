const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = {
  // add your model schema here
};

const WorkoutSchema = new Schema(workoutSchema);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
