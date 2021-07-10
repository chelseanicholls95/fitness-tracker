const viewStats = (req, res) => {
  res.send("stats");
};

const viewExercise = (req, res) => {
  res.send("exercise");
};

const viewHome = (req, res) => {
  res.send("home");
};

module.exports = {
  viewStats,
  viewExercise,
  viewHome,
};
