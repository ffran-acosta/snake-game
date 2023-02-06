let data = localStorage.game

const btnSave = document.getElementById('save')
const nameGame = document.getElementById('name')

btnSave.addEventListener('click', () => {
    let updateLs = ls
    updateLs[0].name = nameGame.value
    localStorage.setItem('game', JSON.stringify(updateLs))
    const update = localStorage.game
    scoreData(update)
})

const scoreData = async (update) => {
    await(await fetch('http://localhost:7003/snake/api/score', {
        method: "POST",
        body: update,
        headers: 
            {
                "Content-Type": "application/json"
            },
        }))           
}

