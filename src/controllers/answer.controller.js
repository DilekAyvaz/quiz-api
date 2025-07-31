const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const submitAnswer = async (req, res) => {
  const { questionId, selectedAnswer } = req.body;
  const question = await prisma.question.findUnique({ where: { id: questionId } });
  if (!question) return res.status(404).json({ message: "Soru bulunamadı" });

  const isTrue = question.answer === selectedAnswer;

  await prisma.answer.create({
    data: {
      userId: req.user.id,
      questionId,
      isTrue
    }
  });

  res.json({ correct: isTrue });
};

module.exports = { submitAnswer };
