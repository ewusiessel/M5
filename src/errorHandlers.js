export const notFound = (err, req, res) => {
  if (err && err.status === 400) {
    res.status(400).send({ message: err.message || "Not found!" });
  }

  next();
};

export const forbidden = (err, req, res) => {
  if (err && err.status === 403) {
    res.status(403).send({ message: err.message || "Forbidden!" });
  }

  next();
};

export const catchAllErrorHandler = (err, req, res) => {
  if (err) {
    if (!req.headersSent) {
      res
        .status(err.status || 500)
        .send({ message: err.message || "Oh crap something went wrong!!" });
    }
  }
  next();
};
  