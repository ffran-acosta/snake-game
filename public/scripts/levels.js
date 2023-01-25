const slow = document.getElementById('slow');
const medium = document.getElementById('medium');
const fast = document.getElementById('fast');

slow.addEventListener('click', () => {
    localStorage.setItem('game', JSON.stringify( [{name:'', speed: 150, level: 'slow', score: 0}]))
});

medium.addEventListener('click', () => {
    localStorage.setItem('game', JSON.stringify( [{name:'', speed: 100, level: 'medium', score: 0}]))
});

fast.addEventListener('click', () => {
    localStorage.setItem('game', JSON.stringify( [{name:'', speed: 75, level: 'fast', score: 0}]))
})

