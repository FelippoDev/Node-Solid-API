export const getAllWorkouts = (request, response) => {
    response.send("Retrived all workouts.")
}


export const createWorkout = (request, response) => {
    const cleanedData = request.body
    response.status(201).json(cleanedData)
}