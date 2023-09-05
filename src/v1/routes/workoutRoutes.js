import express from "express";
import { createWorkout } from "../../controllers/workoutController.js";

const router = express.Router()

router.route("/:workoutId").get((request, response) => {
    response.send({status:200, body: "Workout retrieved."})
})

router.route("/workouts").post((request, response) => {
    createWorkout(request, response)
})

router.route("/:workoutId").patch((request, response) => {
    response.send({status:200, body: "Workout Updated."})
})

router.route("/:workoutId").delete((request, response) => {
    response.send({status:204})    
})

export default router