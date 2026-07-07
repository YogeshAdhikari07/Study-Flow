const btnCreateTask = document.getElementById('btnCreateTask');
const menubtn = document.getElementById('menubtn');
const taskForm = document.getElementById('taskForm');
const cancelCreationbtn = document.getElementById('cancelCreation');
const closeMenuBtn = document.getElementById('closemenu');
function resetForm() {
    taskForm.reset();
    taskForm.classList.add('hidden');
}
closeMenuBtn.addEventListener('click', () => {
    document.getElementById('menu').classList.remove('flex');
    document.getElementById('menu').classList.add('hidden')
    document.getElementById('menu').classList.remove('flex-1');
    document.getElementById('hero').classList.remove('hidden');
})
menubtn.addEventListener('click', () => {
    document.getElementById('menu').classList.add('flex');
    document.getElementById('menu').classList.remove('hidden')
    document.getElementById('menu').classList.add('flex-1');
    document.getElementById('hero').classList.add('hidden');
})
btnCreateTask.addEventListener('click', () => {
    taskForm.classList.remove('hidden')
})
cancelCreationbtn.addEventListener('click', () => {
    resetForm();
})
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const effort = document.getElementById('effort').value;
    if (title.length != 0 && title.length <= 20) {
        if (description.length != 0 && description.length <= 250) {
            const res = await fetch('/api/createTask', {
                method: 'POST',
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
                document.getElementById('task-preview').innerHTML += `<div id="${data['id']}" class="bg-[#242424] flex justify-between py-4 px-6 rounded-xl" onclick="location.href='/page/task/${data['id']}'"><h1>${title}</h1><h1>Pending</h1></div>`;
            }
        }
        else {
            alert('Description Cannot excced the Limit of 250 or may be Empty');
        }
    }
    else {
        alert('Title Cannot excced the Limit of 20 or may be Empty');
    }
});