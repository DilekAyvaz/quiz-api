const jwt = require('jsonwebtoken');
const { hashPassword, comparePassword } = require('../utils/hash');
const { createUser, findUserByEmail } = require('../models/user.model');

const register = async (req, res) => {
  const { email, password } = req.body;
  const hashed = await hashPassword(password);
  const user = await createUser(email, hashed);
  res.json({ message: "Kayıt başarılı", userId: user.id });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user || !(await comparePassword(password, user.password))) {
    return res.status(400).json({ message: "Geçersiz bilgiler" });
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};

module.exports = { register, login };
