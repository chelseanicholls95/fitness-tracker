const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = {
  day: {
    type: Date,
    required: true,
  },
  exercise: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
};

const WorkoutSchema = new Schema(workoutSchema);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
