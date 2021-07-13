const path = require("path");

const viewStats = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
};

const viewExercise = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/exercise.html"));
};

const viewHome = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
};

module.exports = {
  viewStats,
  viewExercise,
  viewHome,
};
