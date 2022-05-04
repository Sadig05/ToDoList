let addButton = document.querySelector('#addToDo');
let container = document.querySelector('#toDoContainer');
let input = document.querySelector('#inputField');
let clearAll = document.querySelector('#clearAll');




addButton.addEventListener('click', newElement);


function newElement() {
    if (input.value.trim() != 0) {
        let localItems = JSON.parse(localStorage.getItem('localItem'))
        if (localItems === null) {
            taskList = [];
        } else {
            taskList = localItems;
        }
        taskList.push(input.value)
        localStorage.setItem('localItem', JSON.stringify(taskList));
    }

    showItem()

}

function showItem() {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        taskList = [];

    } else {
        taskList = localItems;
    }

    let li = "";
    taskList.forEach((data, index) => {

        li += `
        <li>
        <input type = "checkbox"></input>
        <p>${data}</p>
        <i class = "fa fa-close" onclick = "deleteStorage(${index})"></i>
        </li>
        `
        input.value = "";

    });
    container.innerHTML = li;
}

showItem();


function deleteStorage(index) {
    // let localItems = JSON.parse(localStorage.getItem('localItem'));
    taskList.splice(index, 1);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem();
}


clearAll.addEventListener('click', function () {
    container.innerHTML = "";
    localStorage.clear();
    showItem();
})