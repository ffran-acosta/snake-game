let data = localStorage.game

const btnSave = document.getElementById('save')
const nameGame = document.getElementById('name')

btnSave.addEventListener('click', () => {
    //ls: def in script.js
    let updateLs = ls
    updateLs[0].name = nameGame.value
    localStorage.setItem('game', JSON.stringify(updateLs))
    const update = localStorage.game
    scoreData(update)
})

const scoreData = async (update) => {
    await fetch(process.env.SENDSCORE, {
        method: "POST",
        body: update,
        headers: 
            {
                "Content-Type": "application/json"
            },
        })          
}

