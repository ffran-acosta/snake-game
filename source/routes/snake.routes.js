const {Router} = require("express");
const router = Router();
const controller = require('../controller/snake.controller');

router.get('/', controller.home)
router.get('/exit', controller.exit)

module.exports = router