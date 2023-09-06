import express from "express"
import v1WorkoutRouter from "./v1/routes/workoutRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())

app.use("/api/v1/workout", v1WorkoutRouter)

app.listen(PORT, () => {
  console.log(`API is listening on PORT http://127.0.0.1:${PORT}`);
});
