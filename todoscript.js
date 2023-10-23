const taskArray = [];

function retrieveTask () {
    let inputElement = document.querySelector('.task-input');
    let inputValue = inputElement.value;
    let dateElement = document.querySelector('.date-input');
    let dateValue = dateElement.value;
    

    if(inputValue != '' && dateValue != '') {
    taskArray.push({ name: inputValue, date: dateValue });
    inputElement.value = '';
    dateElement.value = '';
    writeTask();
}
}

function writeTask () {
    let pasteHtml = '';
   for (let i = 0; i < taskArray.length; i++) {
    const taskobj = taskArray[i];
    const namevalue = taskobj.name;
    const datevalue = taskobj.date;
    const html = `<div>${namevalue}</div>
    <div class = "todo-grid">${datevalue}</div>
    <button onclick="taskArray.splice(${i},1); writeTask();" class="delete-button">Delete</button>`;
    pasteHtml += html;
}
   document.querySelector('.task-space').innerHTML = pasteHtml;
}

