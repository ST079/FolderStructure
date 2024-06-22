const bcrypt = require("bcryptjs");

const pswEncrypt = (string) => {
  return bcrypt.hashSync(string, 10);
};

const pswDecrypt = (string, hash) => {
  return bcrypt.compareSync(string, hash);
};

module.exports = { pswEncrypt, pswDecrypt };
