const { Workout } = require("../../models");

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);
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
      $push: { exercises: req.body },
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
const aggregateWorkouts = async (req, res) => {
  try {
    const workoutDuration = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
      .sort({ day: -1 })
      .limit(7);
    console.log(workoutDuration);
    return res.status(200).json(workoutDuration);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to get workouts" });
  }
};

module.exports = {
  getAllWorkouts,
  addWorkout,
  updateWorkout,
  aggregateWorkouts,
};
