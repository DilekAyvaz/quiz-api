const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Question model operations
const getAllQuestions = async () => {
  return await prisma.question.findMany({ 
    where: { deletedAt: null } 
  });
};

const getRandomQuestion = async () => {
  const questions = await prisma.question.findMany({ 
    where: { deletedAt: null } 
  });
  return questions[Math.floor(Math.random() * questions.length)];
};

const findQuestionById = async (id) => {
  return await prisma.question.findUnique({ 
    where: { id } 
  });
};

module.exports = {
  getAllQuestions,
  getRandomQuestion,
  findQuestionById
}; 