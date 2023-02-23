const pool = require('../data/db-local')

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
    score: async (req, res) => {
        try {
            const data = await pool.query('SELECT * FROM snake_score')
            const scores = data.rows
            res.render("score-snake", {scores})
        } catch (error) {
            console.log(error);
        }
    },
    scoreSave: async (req, res) => { 
        const score = req.body
        try {
            const newScore = await pool.query('INSERT INTO snake_score(name, level, score) VALUES($1, $2, $3)', [score[0].name, score[0].level, score[0].score])
            res.json(newScore)
        } catch (error) {
            console.log(error);
        }
    },
    exit: (req, res) => {
        res.redirect("http://localhost:7000/")
    }
}

module.exports = controller