const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Answer model operations
const createAnswer = async (userId, questionId, isTrue) => {
  return await prisma.answer.create({
    data: {
      userId,
      questionId,
      isTrue
    }
  });
};

const getUserScore = async (userId) => {
  return await prisma.answer.count({
    where: {
      userId,
      isTrue: true
    }
  });
};

const getUserAnswers = async (userId) => {
  return await prisma.answer.findMany({
    where: {
      userId
    },
    include: {
      question: true
    }
  });
};

module.exports = {
  createAnswer,
  getUserScore,
  getUserAnswers
}; 