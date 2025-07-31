const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ✅ Cevap gönderme
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

// ✅ Skor görüntüleme
const getUserScore = async (req, res) => {
  const score = await prisma.answer.count({
    where: {
      userId: req.user.id,
      isTrue: true
    }
  });

  res.json({ score });
};

// dışa aktar
module.exports = {
  submitAnswer,
  getUserScore,
};
