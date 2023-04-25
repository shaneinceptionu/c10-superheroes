import { Router } from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
import { login } from "../models/user.js";

const router = Router();
passport.use(
  new LocalStrategy(async function (username, password, done) {
    console.log("local strategy", username, password);
    const user = await login(username, password);
    console.log("authenticating");

    if (!user) {
      return done(null, false);
    }
    if (!login(username, password)) {
      return done(null, false);
    }
    const userObject = user.toObject();
    delete userObject.password;
    return done(null, userObject);
  })
);
passport.serializeUser(function (user, cb) {
  console.log("serializing user", user);
  process.nextTick(function () {
    cb(null, { id: user._id, username: user.username });
  });
});

passport.deserializeUser(function (user, cb) {
  console.log("deserializing user", user);
  process.nextTick(function () {
    return cb(null, user);
  });
});

router.get("/", async (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("login route", req.user);
  res.send(req.user);
});

router.post("/logout", async (req, res) => {
  req.logOut(() => {
    res.sendStatus(200);
  });
});

export default router;
