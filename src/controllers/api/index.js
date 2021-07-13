const { Workout } = require("../../models");

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    return res.json({ workouts });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get workouts" });
  }
};
const addWorkout = (req, res) => {
  console.log(req);
};
const updateWorkout = (req, res) => {
  res.send("update workout");
};
const aggregateWorkouts = (req, res) => {
  res.send("aggregate of workouts");
};

module.exports = {
  getAllWorkouts,
  addWorkout,
  updateWorkout,
  aggregateWorkouts,
};
