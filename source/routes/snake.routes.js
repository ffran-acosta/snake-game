const {Router} = require("express");
const router = Router();
const controller = require('../controller/snake.controller');

router.post('/save', controller.save)
router.get('/', controller.home)
router.get('/level', controller.level)
router.get('/play', controller.snake)
router.get("/score", controller.score)
router.get("/exit", controller.exit)

//PRUEBA API
router.get('/api/score', (req, res) => {
    res.send('get score')
})
router.post('/api/score', (req, res) => {
    console.log(req.body[0].score, 'asd')
    res.send('llego post score')
})

module.exports = router