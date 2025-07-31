const router = require('express').Router();
const { authenticate } = require('../middlewares/auth.middleware');
const { submitAnswer } = require('../controllers/answer.controller');
const { getUserScore } = require('../controllers/score.controller');

router.post('/answer', authenticate, submitAnswer);
router.get('/score', authenticate, getUserScore);

module.exports = router;
