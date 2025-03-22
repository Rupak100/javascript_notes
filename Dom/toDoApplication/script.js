let tasks = [];

    function addTask() {
        const title = document.getElementById('taskTitle').value;
        const desc = document.getElementById('taskDescription').value;
        if (!title || !desc) {
            alert('Please fill in both fields');
            return;
        }
        const task = { id: Date.now(), title, desc, completed: false };
        tasks.push(task);
        refreshTasks();
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        saveTasks();
    }

    function refreshTasks() {
        const incompleteTasks = document.getElementById('incompleteTasks');
        const completedTasks = document.getElementById('completedTasks');
        incompleteTasks.innerHTML = '<h2>Incomplete Tasks</h2>';
        completedTasks.innerHTML = '<h2>Completed Tasks</h2>';
        tasks.forEach(task => {
            const taskElem = document.createElement('div');
            taskElem.className = 'task ' + (task.completed ? 'completed' : '');
            taskElem.innerHTML = `
                <p><strong>${task.title}</strong></p>
                <p>${task.desc}</p>
            `;
            if (!task.completed) {
                taskElem.innerHTML += `
                    <button class="button complete-btn" onclick="completeTask(${task.id})">Complete</button>
                    <button class="button edit-btn" onclick="editTask(${task.id})">Edit</button>
                `;
            } else {
                taskElem.innerHTML += `<button class="button undo-btn" onclick="undoTask(${task.id})">Undo</button>`;
            }
            taskElem.innerHTML += `<button class="button delete-btn" onclick="deleteTask(${task.id})">Delete</button>`;
            if (task.completed) {
                completedTasks.appendChild(taskElem);
            } else {
                incompleteTasks.appendChild(taskElem);
            }
        });
    }

    function completeTask(taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
            refreshTasks();
            saveTasks();
        }
    }

    function undoTask(taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = false;
            refreshTasks();
            saveTasks();
        }
    }

    function editTask(taskId) {
        const titleInput = document.getElementById('taskTitle');
        const descInput = document.getElementById('taskDescription');
        const addBtn = document.querySelector('.add-btn');

        const task = tasks.find(t => t.id === taskId);
        if (task) {
            titleInput.value = task.title;
            descInput.value = task.desc;
            addBtn.onclick = function() {
                task.title = titleInput.value;
                task.desc = descInput.value;
                refreshTasks();
                saveTasks();
                addBtn.textContent = 'Add Task';
                addBtn.onclick = addTask;
                titleInput.value = '';
                descInput.value = '';
            };
            addBtn.textContent = 'Confirm Edit';
        }
    }

    function deleteTask(taskId) {
        tasks = tasks.filter(t => t.id !== taskId);
        refreshTasks();
        saveTasks();
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        refreshTasks();
    }

    window.onload = loadTasks;