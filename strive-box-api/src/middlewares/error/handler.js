export const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message || "Oh blimy I think something went wrong!!",
  });
};
