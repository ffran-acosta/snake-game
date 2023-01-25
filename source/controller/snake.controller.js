const {all, write, generate} = require('../models/scores.model');

const controller = {
    home: (req, res) => {
        res.render("home-snake")
    },
    snake: (req, res) => {
        res.render("game-snake")
    },
    level: (req, res) => {
        res.render("levels-snake")
    },
    score: (req, res) => {
        res.render("score-snake")
    },
    save: (req, res) => {
        console.log(all())
        let newScore = generate(req.body)
        let allScores = all()
        allScores.push(newScore)
        write(allScores)
        res.render("game-snake")
    },
    exit: (req, res) => {
        res.redirect("http://localhost:7000/")
    }
}

module.exports = controller