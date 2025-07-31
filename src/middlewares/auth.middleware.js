const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const secret = process.env.JWT_SECRET;

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token eksik" });

  try {
    const payload = jwt.verify(token, secret);
    req.user = await prisma.user.findUnique({ where: { id: payload.id } });
    next();
  } catch {
    res.status(401).json({ message: "Geçersiz token" });
  }
};

const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Yetkiniz yok" });
  }
  next();
};

module.exports = { authenticate, authorize };
