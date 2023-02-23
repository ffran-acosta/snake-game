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
            const data = await pool.query('select * from snake_score')
            const scores = data.rows
            res.render("score-snake", {scores})
        } catch (error) {
            console.log(error);
        }
    },
    scoreSave: (req, res) => { 
        
    },
    exit: (req, res) => {
        res.redirect("http://localhost:7000/")
    }
}

module.exports = controller