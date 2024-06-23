const bcrypt = require("bcryptjs");

const encryptPsw = (req, res, next) => {
  const string = req.body.password;
  if (!string) throw new Error("Please enter your password");
  res.send({ enpw: bcrypt.hashSync(string, 10) });
  next();
};
module.exports = encryptPsw;
