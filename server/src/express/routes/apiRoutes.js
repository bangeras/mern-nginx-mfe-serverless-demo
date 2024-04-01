// Router for API routes

const router = require("express").Router();
const {authCheckMiddleware} = require("../middlewares/authCheckMiddleware")

//Test route to demonstrate protected apis using authCheck 
router.get("/test", (req, res) => {
    console.log("Invoked /api/test")
    res.status(200).json({
      authenticated: true,
      message: "Test API run successfully"
    });
});

router.get("/test-protected", authCheckMiddleware, (req, res) => {
    console.log("Invoked /api/test")
    res.status(200).json({
      authenticated: true,
      message: "Test API run successfully"
    });
});

module.exports = {
    apiRoutesRouter: router
}