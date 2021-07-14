const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = {
  day: {
    type: Date,
    required: true,
  },
  exercise: [
    {
      type: {
        type: String,
        enum: ["resistance", "cardio"],
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
};

const WorkoutSchema = new Schema(workoutSchema);

const Workout = mongoose.model("Workout", WorkoutSchema, "workout");

module.exports = Workout;
