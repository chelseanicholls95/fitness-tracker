const { Workout } = require("../../models");

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    return res.json(workouts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get workouts" });
  }
};
const addWorkout = async (req, res) => {
  try {
    const newWorkout = await Workout.create({});

    return res.json(newWorkout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to add workout" });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    const workout = await Workout.findByIdAndUpdate(id, {
      $push: { exercise: req.body },
    });

    if (res.status === 404) {
      return res.json({ error: "Workout does not exist" });
    }

    return res.json(workout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to update workout" });
  }
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
