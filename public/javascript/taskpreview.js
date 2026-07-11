const startWorkingBtn = document.getElementById('startWorkingBtn');
const statusMessage = document.getElementById('statusMessage');
const completeHoldBtn = document.getElementById('completeHoldBtn');
const Edittask = document.getElementById('editTask');
const deleteNote = document.getElementById('deleteNote');
const taskForm = document.getElementById('taskForm');
const cancelCreationbtn = document.getElementById('cancelCreation');
Edittask.addEventListener('click', async () => {
    taskForm.classList.remove('hidden');
})
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
function resetForm() {
    taskForm.reset();
    taskForm.classList.add('hidden');
}
cancelCreationbtn.addEventListener('click', () => {
    resetForm();
})
taskForm.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('description').value;
        const priority = document.getElementById('priority').value;
        const effort = document.getElementById('effort').value;
        if (title.length != 0 && title.length <= 20) {
            if (description.length != 0 && description.length <= 250) {
                const res = await fetch(`/api/task/editTask/${document.getElementsByTagName('body')[0].id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        priority: priority,
                        effort: effort
                    })
                })
                const data = await res.json();
                if (res.status == 201) {
                    resetForm();
                    alert(data['message']);
                    window.location.reload();
                }
            }
            else {
                alert('Description Cannot excced the Limit of 250 or may be Empty');
            }
        }
        else {
            alert('Title Cannot excced the Limit of 20 or may be Empty');
        }
    }
    catch (err) {
        console.log(err);
    }
});
deleteNote.addEventListener('click',async ()=>{
    try{
        const res = await fetch(`/api/task/deleteTask/${document.getElementsByTagName('body')[0].id}`,{method:'DELETE'});
        const data = await res.json();
        if(res.status === 201){
            alert(data["message"]);
            window.location='/page/task';
        }else
        {
            alert(data["message"]);
        }
    }catch(err){
        alert('Sorry Error Occured!');
    }
})