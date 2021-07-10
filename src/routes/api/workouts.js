const { Router } = require("express");

const {
  getAllWorkouts,
  addWorkout,
  updateWorkout,
  aggregateWorkouts,
} = require("../../controllers/api/index");

const router = Router();

router.get("/", getAllWorkouts);
router.post("/", addWorkout);
router.put("/:id", updateWorkout);
router.get("/range", aggregateWorkouts);

module.exports = router;
