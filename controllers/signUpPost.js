const db = require("./../config/queries");
const bcrypt = require("bcryptjs");
const { body, matchedData, validationResult } = require("express-validator");

const validateUser = [
  body("username")
    .trim()
    .isLength({ min: 4, max: 32 })
    .withMessage("Username should be within 4 to 32 characters"),
  body("password")
    .trim()
    .isLength({ min: 8, max: 64 })
    .withMessage("Password should contain at least 8 characters!"),
  body("confirm-password").trim().custom((value, { req }) => {
    if (value !== req.body.password) throw new Error("Password do not match!");
    return true;
  }),
];

module.exports = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const { username, password } = matchedData(req);
      const hasedPassword = bcrypt.hash(password, 10);
      await db.addUser(username, hasedPassword)
      res.redirect('/')
    } else {
      res.status(400).render("sign-up", { errors: errors.array() });
    }
  },
];
