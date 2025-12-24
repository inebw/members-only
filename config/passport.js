const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("./pool");
const bcrypt = require("bcryptjs");

const verifyCallback = async (username, password, done) => {
  try {
    const { rows } = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    const user = rows[0];

    if (!user) {
        return done(null, false, { message: "User not found!" });
    }

    
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      done(null, false, { message: "Wrong Password Entered!" });
    } else {
      done(null, user);
    }
  } catch (err) {
    done(err);
  }
};

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = rows[0];
    done(null, user);
  } catch (err) {
    done(err);
  }
});
