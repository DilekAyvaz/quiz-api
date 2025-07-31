const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// User model operations
const createUser = async (email, hashedPassword) => {
  return await prisma.user.create({
    data: { 
      email, 
      password: hashedPassword 
    }
  });
};

const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({ 
    where: { email } 
  });
};

const findUserById = async (id) => {
  return await prisma.user.findUnique({ 
    where: { id } 
  });
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById
}; 