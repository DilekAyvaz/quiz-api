const { createAnswer, getUserScore } = require('../models/answer.model');
const { findQuestionById } = require('../models/question.model');

// ✅ Cevap gönderme
const submitAnswer = async (req, res) => {
  const { questionId, selectedAnswer } = req.body;

  const question = await findQuestionById(questionId);
  if (!question) return res.status(404).json({ message: "Soru bulunamadı" });

  const isTrue = question.answer === selectedAnswer;

  await createAnswer(req.user.id, questionId, isTrue);

  res.json({ correct: isTrue });
};

// ✅ Skor görüntüleme
const getUserScoreHandler = async (req, res) => {
  const score = await getUserScore(req.user.id);
  res.json({ score });
};

// dışa aktar
module.exports = {
  submitAnswer,
  getUserScore: getUserScoreHandler,
};
