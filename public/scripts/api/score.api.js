const btnSave = document.getElementById('save')
btnSave.addEventListener('click', () => {
    scoreData()
})

const scoreData = async () => {
    let data = localStorage.game
    const send = await(await fetch('http://localhost:7003/snake/api/score', {
        method: "POST",
        body: data,
        headers: 
            {
                "Content-Type": "application/json"
            },
        }))           
}