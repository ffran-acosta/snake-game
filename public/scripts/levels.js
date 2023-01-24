const slow = document.getElementById('slow');
const medium = document.getElementById('medium');
const fast = document.getElementById('fast');

slow.addEventListener('click', () => {
    localStorage.setItem('speed', JSON.stringify( [{speed: 150}]))
});

medium.addEventListener('click', () => {
    localStorage.setItem('speed', JSON.stringify( [{speed: 100}]))
});

fast.addEventListener('click', () => {
    localStorage.setItem('speed', JSON.stringify( [{speed: 75}]))
})

