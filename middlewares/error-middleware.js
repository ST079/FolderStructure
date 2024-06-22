const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend Failed";
  const extraDetails = err.exports || "Error from backend";
  return res.status(500).json({ message, extraDetails });
};

module.exports = errorMiddleware;
