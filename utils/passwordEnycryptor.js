const bcrypt = require("bcrypt");

const pswEncrypt = (string) => {
  return bcrypt.hashSync(string, 10);
};

const pswDecrypt = (string, hash) => {
  return bcrypt.compareSync(string, hash);
};
