const {Router} = require("express");
const router = Router();
const controller = require('../controller/snake.controller');


router.get('/', controller.home)
router.get('/level', controller.level)
router.get('/play', controller.snake)
router.get("/score", controller.score)
router.get("/exit", controller.exit)

module.exports = router