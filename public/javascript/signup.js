const form = document.getElementById('signupForm');
const alertbox = document.getElementById('alertbox');
function validation(displayname, email, password) {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (displayname.length <= 15 && password.length >= 8 && regExp.test(email)) {
        return {status:true,
            message:'No Error'
        };
    }
    else {
        if(displayname.length <= 15){
            return {
                status:false,
                message:'DisplayName is Too Long!'
            }
        }
        else if(password.length >= 8){
            return {
                status:false,
                message:'Password is Too Short!'
            }
        }
        else{
            return {
                status:false,
                message:'Email is  Incorrect!'
            }
        }
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
    if (data["status"]) {
        alertbox.classList.remove('hidden');
        alertbox.classList.remove('text-red-300');
        alertbox.classList.add('text-green-300');
        alertbox.innerText = `${data.message}`
        setInterval(() => {
            alertbox.classList.add('hidden');
            location.href='/page/home'
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
    const email = document.getElementById('email').value.trim().replaceAll(' ', '');
    const password = document.getElementById('password').value;
    const result = validation(displayname, email, password);
    if (result['status']) {
        createuser(displayname, email, password);
    }
    else {
        alertbox.classList.remove('hidden');
        alertbox.classList.remove('text-green-300');
        alertbox.classList.add('text-red-300');
        alertbox.innerText = `${result['message']}`
        setInterval(() => {
            alertbox.classList.add('hidden');
        }, 2500);
    }
});