const {resolve} = require('path')
const fs = require('fs')

const model = {
    all: () => {
        let file = resolve(__dirname,'../data','scores.json')
        let data = fs.readFileSync(file)
        return JSON.parse(data)
    },
    generate: (data) => {        
        // let level =  JSON.parse(localStorage.getItem("speed"))
        let score = {}
        score.name = data.name
        // score.level = level[0].level
        // score.score = data.score
        return score
    },
    write: (data) => {
        let file = resolve(__dirname,'../data','scores.json')
        let json = JSON.stringify(data,null,2)
        return fs.writeFileSync(file,json)
    }
}

module.exports = model