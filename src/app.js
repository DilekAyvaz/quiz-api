const express = require('express');
require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/auth.routes'));
app.use('/api', require('./routes/question.routes'));
app.use('/api', require('./routes/answer.routes'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

// 404 handler - route bulunamadığında
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    error: {
      statusCode: 404,
      message: `Can't find ${req.originalUrl} on this server!`
    }
  });
});

// Global error handler
app.use(errorHandler);

module.exports = app;
