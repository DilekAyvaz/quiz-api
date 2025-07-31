const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.question.createMany({
    data: [
      {
        content: "2 + 2 kaçtır?",
        answer: "4",
      },
      {
        content: "Başkentimiz neresidir?",
        answer: "Ankara",
      },
      {
        content: "3 x 3 kaç eder?",
        answer: "9",
      },
    ]
  });

  console.log("Sorular eklendi!");
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
