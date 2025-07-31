const bcrypt = require('bcrypt');

const hashPassword = async (password) => await bcrypt.hash(password, 10);
const comparePassword = async (plain, hashed) => await bcrypt.compare(plain, hashed);

module.exports = { hashPassword, comparePassword };
