let addButton = document.querySelector('#addToDo');
let container = document.querySelector('#toDoContainer');
let input = document.querySelector('#inputField');
let clearAll = document.querySelector('#clearAll');




addButton.addEventListener('click', newElement);


function newElement() {
    let inpVal = input.value;
    let li = document.createElement("li");

    let p = document.createElement('p');
    p.textContent = inpVal;
    let check = document.createElement("input");
    check.setAttribute('type', 'checkbox');
    li.appendChild(check);
    li.appendChild(p);
    let x = document.createElement("i");
    x.className = "fa fa-close";
    li.appendChild(x);



    if (inpVal.trim() != 0) {
        container.appendChild(li);
        let localItems = JSON.parse(localStorage.getItem('localItem'));
        if (localItems === null) {
            taskList = [];
        } else {
            taskList = localItems;
        }
        taskList.push(inpVal);
        localStorage.setItem('localItem', JSON.stringify(taskList));
    }
    input.value = "";


    let del = document.getElementsByTagName('i');
    let temp = Array.from(del);
    temp.forEach(element => {
        element.addEventListener('click', function () {
            this.parentNode.remove();
        })
    });

    let checked = document.querySelectorAll('input[type=checkbox]');

    checked.forEach(el => {
        el.addEventListener('change', function () {
            if (this.checked) {
                this.nextSibling.classList.add("strike");
            } else {
                this.nextSibling.classList.remove('strike');
            }
        })
    })

}

clearAll.addEventListener('click', function () {
    container.innerHTML = "";
})