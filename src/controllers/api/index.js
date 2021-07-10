const getAllWorkouts = (req, res) => {
  res.send("get all workouts");
};
const addWorkout = (req, res) => {
  res.send("add workout");
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
