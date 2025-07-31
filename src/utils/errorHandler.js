const AppError = require('./appError');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new AppError(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new AppError(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new AppError(message, 400);
  }

  // Prisma errors
  if (err.code === 'P2002') {
    const message = 'Duplicate field value entered';
    error = new AppError(message, 400);
  }

  if (err.code === 'P2025') {
    const message = 'Record not found';
    error = new AppError(message, 404);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Invalid token';
    error = new AppError(message, 401);
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'Token expired';
    error = new AppError(message, 401);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error',
    error: {
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal Server Error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};

module.exports = errorHandler; 