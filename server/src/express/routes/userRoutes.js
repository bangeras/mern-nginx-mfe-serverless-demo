// Router for API routes

const {User} = require("../models/user")
const router = require("express").Router();
// const {authCheckMiddleware} = require("../middlewares/authCheckMiddleware")
const {getAllUsers, createUser, getUser, updateUser, deleteUser} = require("../controllers/userController")

router.route("/")
  // GET /api/users
  .get(getAllUsers)
  // POST /api/users
  .post(createUser)


router.route("/:id")
  // GET /api/users/:id
  .get(getUser)
  // PATCH /api/users/:id
  .patch(updateUser)
  // DELETE /api/users/:id
  .delete(deleteUser)

module.exports = {
    userRoutesRouter: router
}