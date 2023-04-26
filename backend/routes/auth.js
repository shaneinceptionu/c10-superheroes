import express from "express";
import passport from "passport";

const router = express.Router();

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

export default router;
