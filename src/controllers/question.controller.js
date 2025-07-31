const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllQuestions = async (req, res) => {
  const questions = await prisma.question.findMany({ where: { deletedAt: null } });
  res.json(questions);
};

const getRandomQuestion = async (req, res) => {
  const questions = await prisma.question.findMany({ where: { deletedAt: null } });
  const random = questions[Math.floor(Math.random() * questions.length)];
  res.json(random);
};

module.exports = { getAllQuestions, getRandomQuestion };
