const { Router } = require("express");

const { viewStats, viewExercise, viewHome } = require("../../controllers/view");

const router = Router();

router.get("/stats", viewStats);
router.get("/exercise", viewExercise);
router.get("/", viewHome);

module.exports = router;
