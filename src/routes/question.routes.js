const router = require('express').Router();
const { authenticate } = require('../middlewares/auth.middleware');
const { getAllQuestions, getRandomQuestion } = require('../controllers/question.controller');

router.get('/questions', authenticate, getAllQuestions);
router.get('/question/random', authenticate, getRandomQuestion);

module.exports = router;
