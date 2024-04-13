const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const saltRound = 10;
const jwt = require("jsonwebtoken");

module.exports.createUser = async (req, res) => {
  const { username, password, email, contact_no } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRound);
  let user = await User.create({
    username,
    password: hashedPassword,
    email,
    contact_no,
  });
  const token = await jwt.sign({ id: user._id.toString() }, "sCrEt@1276", {
    expiresIn: "1d",
  });
  res.status(200).json({
    id: user._id.toString(),
    username: user.username,
    email: user.email,
    contact_mo: user.contact_no,
    token: token,
  });
};

module.exports.createSession = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    const comparePassword = await bcrypt.compare(password, user.password);
    if (comparePassword) {
        const token = await jwt.sign({ id: user._id.toString() }, "sCrEt@1276", {
            expiresIn: "1d",
          });
      return res.status(200).json({
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        contact_mo: user.contact_no,
        token: token,
      });
    }
    return res
      .status(400)
      .json({ message: "Email address / password is wrong" });
  } else {
    return res
      .status(400)
      .json({ message: "Email address / password is wrong" });
  }
};
