// Router for Auth routes

const router = require("express").Router();
const {passport} = require("../config/passportConfig")
const {authCheckMiddleware} = require("../middlewares/authCheckMiddleware")

const CLIENT_URL = "http://localhost:3000/"

// Google OAuth API invoked during Login from SPA
router.get("/google", (req, res, next)=>{
    console.log("Login request for google..IsAuthenticated=" + req.isAuthenticated())
    passport.authenticate("google", { scope: [ "email", "profile" ] })(req, res, next)
});

// Callback API invoked by Google Auth server after OAuth handshake
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login/failed' }),
  (req, res) => {
    // Redirect to React app with the token securely (e.g., using cookies)
    res.redirect(CLIENT_URL); // Replace with your React app URL
  }
);

// Handler for Google OAuth failure
router.get("/login/failed", (req,res) => {
    console.log("login failed!")

    res.status(401).json({
        success: false,
        message: "User authentication failed!",
    });
});

// When logout, redirect to client
router.get("/logout", (req, res, next) => {
    console.log("logout called..", req.isAuthenticated())

    req.logout();
    res.clearCookie('userProfile');
    res.clearCookie('authToken');
    console.log("logout called after..", req.isAuthenticated())

    res.redirect(CLIENT_URL);
});

  
//Test route to demonstrate protected apis using authCheck 
router.get("/test", authCheckMiddleware, (req, res) => {
    console.log("Invoked /test")
    res.status(200).json({
      authenticated: true,
      message: "User successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
});


module.exports = {
  authRoutesRouter: router
}