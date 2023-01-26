const {all, write, generate} = require('../../models/scores.model');

const controller = {
    scoreData: (req, res) => {
        let localStorage = req.body[0]
        console.log(localStorage)
        let newScore = generate(localStorage)
        let allScores = all()
        allScores.push(newScore)
        write(allScores)
        res.render('levels-snake')
    }
}

module.exports = controller