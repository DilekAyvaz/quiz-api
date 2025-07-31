const { getAllQuestions, getRandomQuestion } = require('../models/question.model');

const getAllQuestionsHandler = async (req, res) => {
  const questions = await getAllQuestions();
  res.json(questions);
};

const getRandomQuestionHandler = async (req, res) => {
  const random = await getRandomQuestion();
  res.json(random);
};

module.exports = { 
  getAllQuestions: getAllQuestionsHandler, 
  getRandomQuestion: getRandomQuestionHandler 
};
