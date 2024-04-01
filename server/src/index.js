const config = require('config')
const express = require("express")

const morgan = require("morgan")
const cookieParser = require('cookie-parser')
const cookieSession = require("cookie-session")
const cors = require("cors");
const {passport} = require("./express/config/passportConfig")

const {authRoutesRouter} = require("./express/routes/authRoutes")
const {apiRoutesRouter} = require("./express/routes/apiRoutes")
const {userRoutesRouter} = require("./express/routes/userRoutes")


const EXPRESS_PORT = 4000

const app = express()

// ###### Middlewares ######

// Logging middleware:  Log HTTP Requests and Errors
app.use(morgan('tiny'))

// Cookie Parser middleware: transfers cookies with client requests.
app.use(cookieParser())

// Cookie Session middleware
app.use(
  cookieSession({ name:"session", keys:["project-mfe"], maxAge: 24 * 60 * 60 * 100 }) // session will expire after 24 hours
);

// Oauth Passport middleware: Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Use express.json() middleware to parse JSON requests
app.use(express.json());


// Cors middleware: To allow SPA client requests
app.use(
    cors({
      origin: config.get("CLIENT_SPA.URL"), // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true // allow session cookie from browser to pass through
    })
);


// ###### Routes ######
app.use("/auth", authRoutesRouter)
// app.use("/api", apiRoutesRouter);
app.use("/api/users", userRoutesRouter);

// connect react to nodejs express server
app.listen(config.get("EXPRESS.PORT"), () => console.log(`Server is running on port ${config.get("EXPRESS.PORT")}!`));