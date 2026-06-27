const form = document.getElementById('signupForm');
const alertbox = document.getElementById('alertbox');
function validation(displayname, email, password) {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (displayname.length <= 15 && password.length >= 8 && regExp.test(email)) {
        return true;
    }
    else {
        return false
    }
}
async function createuser(displayname, email, password) {
    const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            displayname: displayname,
            email: email,
            password: password
        })
    });
    const data = await res.json();
    console.table(data)
    if (data["status"]) {
        alertbox.classList.remove('hidden');
        alertbox.classList.remove('text-red-300');
        alertbox.classList.add('text-green-300');
        alertbox.innerText = `User Created!`
        setInterval(() => {
            alertbox.classList.add('hidden');
        }, 2500);
    } else {
        alertbox.classList.remove('hidden');
        alertbox.classList.remove('text-green-300');
        alertbox.classList.add('text-red-300');
        alertbox.innerText = `Server Error`
        setInterval(() => {
            alertbox.classList.add('hidden');
        }, 2500);
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const displayname = document.getElementById('displayname').value.trim().replaceAll(' ', '');
    const email = document.getElementById('email').value.trim().replaceAll(' ', '');
    const password = document.getElementById('password').value.trim().replaceAll(' ', '');
    const result = validation(displayname, email, password);
    if (result) {
        createuser(displayname, email, password);
    }
    else {
        alertbox.classList.remove('hidden');
        alertbox.classList.remove('text-green-300');
        alertbox.classList.add('text-red-300');
        alertbox.innerText = `Error`
        setInterval(() => {
            alertbox.classList.add('hidden');
        }, 2500);
    }
});