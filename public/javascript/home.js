const menubtn = document.getElementById('menubtn');
const closeMenuBtn = document.getElementById('closemenu');
closeMenuBtn.addEventListener('click',()=>{
    document.getElementById('menu').classList.remove('flex');
    document.getElementById('menu').classList.add('hidden')
    document.getElementById('menu').classList.remove('flex-1');
    document.getElementById('hero').classList.remove('hidden');
})
menubtn.addEventListener('click',()=>{
    document.getElementById('menu').classList.add('flex');
    document.getElementById('menu').classList.remove('hidden')
    document.getElementById('menu').classList.add('flex-1');
    document.getElementById('hero').classList.add('hidden');
})
function updateDateTime() {
    const date = new Date();
    document.getElementById('date-preview').textContent =
        `Date: ${date.toLocaleDateString()}`;
    document.getElementById('time-preview').textContent = `Time: ${date.toLocaleTimeString('en-IN')}`
}
function updateGreetingMessage() {
    const date = new Date();
    let message = '';
    if (date.getHours() >= 5 && date.getHours() < 12) {
        message = "Good Morning";
    } else if (date.getHours() >= 12 && date.getHours() < 17) {
        message = "Good Afternoon";
    } else if (date.getHours() >= 17 && date.getHours() < 21) {
        message = "Good Evening";
    } else {
        message = "Good Night";
    }
    document.getElementById('greeting-message').textContent = `${message},`
}
updateGreetingMessage();
updateDateTime();
setInterval(updateDateTime, 1000);