import express from "express";
import {
  createWorkout,
  updateWorkout,
  getWorkout,
  destroyWorkout,
} from "../../controllers/workoutController.js";

const router = express.Router();

router.route("/:workoutId").get((request, response) => {
  getWorkout(request, response);
});

router.post("/workouts", createWorkout)

router.patch("/:workoutId", updateWorkout)

router.route("/:workoutId").delete((request, response) => {
  destroyWorkout(request, response);
});

export default router;
