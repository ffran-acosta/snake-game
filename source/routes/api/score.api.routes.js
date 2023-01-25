const {Router} = require("express");
const router = Router();

const controller = require('../../controller/api/score.controller.api')

router.post('/score', controller.scoreData)

module.exports = router;