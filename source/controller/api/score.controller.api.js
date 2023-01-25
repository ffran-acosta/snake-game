const {all, write, generate} = require('../../models/scores.model');

const controller = {
    scoreData: (req, res) => {
        let localStorage = req.body[0]
        console.log(localStorage)
        let newScore = generate(localStorage)
        let allScores = all()
        allScores.push(newScore)
        write(allScores)
        res.redirect('http://localhost:7003/snake/play')
    }
}

module.exports = controller