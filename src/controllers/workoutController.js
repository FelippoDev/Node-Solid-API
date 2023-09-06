export const getWorkout = (request, response) => {
    const id = request.params.workoutId
    return response.status(200).json({body: "Successfully Retrieved."})
}

export const createWorkout = (request, response) => {
    const cleanedData = request.body
    response.status(201).json(cleanedData)
}

export const updateWorkout = (request, response) => {
    const id = request.params.workoutId
    // const query = Workout.objects.get(id=id)
    return response.status(200).json({message: "Workout updated successfully."})
}

export const allWorkouts = (request, response) => {
    // const query = Workouts.objects.all()
    return response.status(200).json({data: "All data."})
}

export const destroyWorkout = (request, response) => {
    const id = request.params.workoutId
    return response.status(204)
}