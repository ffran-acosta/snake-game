const slow = document.getElementById('slow');
const medium = document.getElementById('medium');
const fast = document.getElementById('fast');

slow.addEventListener('click', () => {
    localStorage.setItem('game', JSON.stringify( [{name:'', speed: 175, level: 'slow', score: 0}]))
});

medium.addEventListener('click', () => {
    localStorage.setItem('game', JSON.stringify( [{name:'', speed: 125, level: 'medium', score: 0}]))
});

fast.addEventListener('click', () => {
    localStorage.setItem('game', JSON.stringify( [{name:'', speed: 90, level: 'fast', score: 0}]))
})

