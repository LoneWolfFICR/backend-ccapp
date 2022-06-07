require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
  async verificarToken(token) {
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) return false;
      return true;
    });
  },
};
