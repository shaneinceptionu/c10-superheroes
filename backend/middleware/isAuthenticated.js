export const isAuthenticated = (req, res, next) => {
  console.log("isAuth");
  console.log("req.user", req.user);
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};
