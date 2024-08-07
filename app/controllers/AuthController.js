const validator = require("validator");
const UsersModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");

class AuthController {
  static register(req, res) {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({
        message: "One or more fields are required",
      });
    }

    // validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Email is invalid" });
    }

    if (password?.length < 6) {
      return res.status(400).json({
        message: "Password must contain atleast 6 characters.",
      });
    }

    let hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new UsersModel({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    newUser
      .save()
      .then(() => {
        return res.status(200).json({
          message: "Thank you for signing up.",
        });
      })
      .catch((e) => {
        try {
          if (e?.keyValue?.email) {
            return res.status(403).json({
              message: "Email already used.",
            });
          } else {
            return res.status(403).json({
              message: "An error occcurred",
            });
          }
        } catch (e) {
          return res.status(403).json({
            message: "An error occcurred",
          });
        }
      });
  }
}

module.exports = AuthController;
