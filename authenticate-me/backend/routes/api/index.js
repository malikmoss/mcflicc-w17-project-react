const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const PhotoRoute = require("./home.js")
const commentsRouter = require("./comments.js")

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/explore', PhotoRoute)
router.use('/comments', commentsRouter)

module.exports = router;