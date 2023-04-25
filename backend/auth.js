export const mustBeAgent = (req, res, next) => {
  if (req.user.role === "agent") {
    next();
  } else {
    res.status(403).send({ message: "you are not an agent" });
  }
};
