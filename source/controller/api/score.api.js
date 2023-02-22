const pool = require('../../data/db-local')

const db = {
    scoreData: async (req, res) => {
        try {
            const score = await pool.query('select * from snake_score')
            console.log(score.rows);
            return res.status(200).json({
                data: score.rows,
                status: 200
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = db