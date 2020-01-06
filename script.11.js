const getID = id => document.getElementById(id);
const getSel = sel => document.querySelector(sel);
getID('warning').style.display = 'none';
let taskList = document.forms.taskList;
let addNewTask = document.forms.addNewTask;

function showWarningBlock(warningText) {
    getID('warning').style.display = 'block';
    getID('textWarning').innerText = warningText;
    getID('closeWarning').onclick = function () {
        getID('warning').style.display = 'none';
    }
}

addNewTask.add.onclick = function () {
    if (addNewTask.writeNewTask.value == '') {
        showWarningBlock('Пусте поле не можна додати');
    } else {
        let newTask = addNewTask.writeNewTask.value;
        let newDiv = document.createElement("div");
        let newLabel = document.createElement("label");
        let newInput = document.createElement("input");
        newInput.id = newTask;
        newInput.type = 'checkbox';
        newLabel.innerText = newTask;
        newLabel.setAttribute("for", newInput.id);
        newInput.onclick = function () {
            hide();
        };
        newDiv.appendChild(newInput);
        newDiv.appendChild(newLabel);
        newInput.setAttribute('name', newTask);
        newDiv.classList.add('checkbox');
        taskList.appendChild(newDiv);
        addNewTask.writeNewTask.value = '';
    }
}

function hide() {
    if (taskList.length == 1) {
        event.target.checked = false;
    
        showWarningBlock('Останній таск зі списку Ви не можете видалити');
    } else {
        event.target.parentElement.remove();
    }
}