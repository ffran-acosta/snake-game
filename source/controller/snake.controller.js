const controller = {
    home: (req, res) => {
        res.render("home-snake")
    },
    snake: (req, res) => {
        res.render("game-snake")
    },
    score: (req, res) => {
        res.render("score-snake")
    },
    exit: (req, res) => {
        res.redirect("http://localhost:7000/")
    }
}

module.exports = controller