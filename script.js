document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    window.addTask = function() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const newRow = document.createElement('tr');

        const taskCell = document.createElement('td');
        taskCell.textContent = taskText;
        newRow.appendChild(taskCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = 'Pending';
        newRow.appendChild(statusCell);

        const actionCell = document.createElement('td');

        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle';
        toggleButton.onclick = function() {
            toggleStatus(this);
        };
        actionCell.appendChild(toggleButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteTask(this);
        };
        actionCell.appendChild(deleteButton);

        newRow.appendChild(actionCell);

        taskList.appendChild(newRow);
        taskInput.value = '';
    };

    window.toggleStatus = function(button) {
        const statusCell = button.parentElement.previousElementSibling;
        statusCell.textContent = statusCell.textContent === 'Pending' ? 'Completed' : 'Pending';
    };

    window.deleteTask = function(button) {
        const row = button.parentElement.parentElement;
        taskList.removeChild(row);
    };
});