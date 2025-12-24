const { body, validationResult, matchedData } = require("express-validator");
const db = require("./../config/queries");
const { format } = require("date-fns");

validatePost = [
  body("title")
    .trim()
    .escape()
    .isAlphanumeric('en-US', { ignore: ' ' })
    .withMessage("Title should contain only letters and numbers")
    .isLength({ min: 3, max: 64 })
    .withMessage("Title should be within 3 to 64 characters"),
  body("message")
    .trim()
    .escape()
    .isLength({ min: 100 })
    .withMessage("Message should be at least 100 characters long"),
];

module.exports = [
  validatePost,
  async (req, res) => {
    const errors = validationResult(req);
    const { id } = req.params;
    if (!errors.isEmpty()) {
      res.status(401).render("new-post", { errors: errors.array(), id: id });
    } else {
      const { title, message } = matchedData(req);
      const addedOn = format(new Date(), "PPP");
      await db.addPost(title, message, addedOn, id);
      res.redirect("/");
    }
  },
];
