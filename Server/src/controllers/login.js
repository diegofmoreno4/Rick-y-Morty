const userList = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  const valido = userList.find(
    (user) => user.email === email && user.password === password
  );
  if (valido) res.status(200).json({ access: true });
  else res.status(400).json({ access: false });
};

module.exports = login;
