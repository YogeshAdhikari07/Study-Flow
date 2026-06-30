const form = document.getElementById('loginForm');
function validation(displayname, password) {
    if (displayname.length <= 15 && password.length >= 8) {
        return {
            status: true,
            message: 'No Error'
        };
    }
    else {
        if (displayname.length <= 15) {
            return {
                status: false,
                message: 'DisplayName is Too Long!'
            }
        }
        else if (password.length >= 8) {
            return {
                status: false,
                message: 'Password is Too Short!'
            }
        }
    }
}
async function findUser(displayname, password) {
    const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            displayname: displayname,
            password: password
        })
    });
    const data = await res.json();
    if (data["status"]) {
        alertbox.classList.remove('hidden');
        alertbox.classList.remove('text-red-300');
        alertbox.classList.add('text-green-300');
        alertbox.innerText = `${data.message}`
        setInterval(() => {
            alertbox.classList.add('hidden');
            location.href = '/page/home'
        }, 2500);
    } else {
        alertbox.classList.remove('hidden');
        alertbox.classList.remove('text-green-300');
        alertbox.classList.add('text-red-300');
        alertbox.innerText = `${data.message}`;
        setInterval(() => {
            alertbox.classList.add('hidden');
        }, 2500);
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const displayname = document.getElementById('displayname').value.trim().replaceAll(' ', '');
    const password = document.getElementById('password').value;
    const result = validation(displayname, password);
    if (result['status']) {
        findUser(displayname,password);
    }
    else {
        alertbox.classList.remove('hidden');
        alertbox.classList.remove('text-green-300');
        alertbox.classList.add('text-red-300');
        alertbox.innerText = `${result['message']}`
        setInterval(() => {
            alertbox.classList.add('hidden');
        }, 1500);
    }
})