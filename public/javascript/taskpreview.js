const startWorkingBtn = document.getElementById('startWorkingBtn');
const statusMessage = document.getElementById('statusMessage');
const completeHoldBtn = document.getElementById('completeHoldBtn');
async function updateStatus(id, status) {
    try {
        const res = await fetch(`/api/task/status/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: status
            })
        });
        const data = await res.json();
        if (res.status === 200 && status === 'working') {
            alert(data['message']);
            startWorkingBtn.classList.add('hidden');
            completeHoldBtn.classList.remove('hidden');
            statusMessage.textContent = status
            console.log(1)
            return
        }
        else if (res.status === 200 && status === 'hold') {
            alert(data['message']);
            startWorkingBtn.classList.remove('hidden');
            completeHoldBtn.classList.add('hidden');
            statusMessage.textContent = status
            console.log(0)
        } else {
            alert(data['message']);
            startWorkingBtn.remove();
            completeHoldBtn.remove();
            statusMessage.textContent = status
            console.log(3)
        }
    } catch (err) {
        console.log(err)
    }
}