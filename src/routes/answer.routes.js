const router = require('express').Router();
const { authenticate } = require('../middlewares/auth.middleware');
const { submitAnswer } = require('../controllers/answer.controller');

router.post('/answer', authenticate, submitAnswer);

module.exports = router;
