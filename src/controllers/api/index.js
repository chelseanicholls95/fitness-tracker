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
const addWorkout = async (req, res) => {
  try {
    const { day, exercise } = req.body;

    const workout = {
      day,
      exercise,
    };

    await Workout.create(workout);

    if (res.status === 404) {
      return res.json({ error: "Failed to add workout" });
    }

    return res.json({ success: "Workout successfully added" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to add workout" });
  }
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
