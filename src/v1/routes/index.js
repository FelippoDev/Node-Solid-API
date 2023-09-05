import express from "express"

const router = express.Router();

router.route("/").get((request, response) => {
  const responseObject = {
    msg: "This is v1 route",
  };
  response.send(responseObject);
});

export default router

