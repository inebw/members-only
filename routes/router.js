const { Router } = require("express");
const indexController = require("./../controllers/indexController");
const singUpGet = require('./../controllers/signUpGet')
const signUpPost = require('./../controllers/signUpPost')
const loginGet = require('./../controllers/loginGet');
const passport = require("passport");
const newPostGet = require('./../controllers/newPostGet');
const newPostPost = require("../controllers/newPostPost");
const logoutGet = require('./../controllers/logoutGet');
const deletePostPost = require("../controllers/deletePostPost");
const joinClubGet = require("../controllers/joinClubGet");
const joinClubPost = require("../controllers/joinClubPost");


const router = Router();

router.post("/login", passport.authenticate('local', {successRedirect:'/', failureRedirect:'/'}));
router.get("/", indexController);
router.get("/login", loginGet);

router.get("/sign-up", singUpGet);
router.post("/sign-up", signUpPost);
router.get('/:id/new-post', newPostGet)
router.post('/:id/new-post', newPostPost)
router.get('/logout', logoutGet)
router.post('/:id/delete-post', deletePostPost)
router.get('/:id/join-club', joinClubGet)
router.post('/:id/join-club', joinClubPost)

module.exports = router;
