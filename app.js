let lists = {
    1: {
        name: "Example list",
        todo: [
            {
                text:"This is an example task",
                completed: true
            }
        ]
    }
   }
let i = 1

const inputForButton = document.getElementById('inputForButton')
const listNames = document.getElementById('listNames')
let select = 1
let currentList = lists[select];
let listChange = false;

const ThisIsNum = 27547683416 
window.onload = load();
window.onload = render();

function render() {
    nameOfList = creatingListNames()
    if(nameOfList != "") {
        listNames.innerHTML = nameOfList;
        toDoList = creatingToDos();
        const right = document.getElementById('right')
        right.innerHTML = `
            <div id="title" class="${select}">
                <h1>${lists[select].name}</h1>
                <div class="contain">
                    <input type="button" value="Edit Name" onclick="listEdit(this)" id="listEdit">
                    <input type="button" value="Delete List" onclick="listDel()" id="listDel">
                    <input type="button" value="Clear checked boxes" onclick="clearCheck()" id="clear">
                </div>
            </div>
            <div id="listDisplay">
                <div id="toDoList">
                    ${toDoList}
                </div>
            </div>
            
            <div class="stickyButton" onclick="addTodoInput()">
                <h1>+</h1>
            </div>
            `
    }
    else {
        listNames.innerHTML = nameOfList;
        const right = document.getElementById('right')

        right.innerHTML = `
        <div id="newRight">
            <p class="noList">You need to add a new list and get started.</p>
            <p class="noList">Just type in the box that says "Enter List Name..."</p>
        </div>`
    }
    save();
}

function runThrough() {
    for (let j = 0; j < lists[select].todo.length; j++) {
        for(y in lists[select].todo) {
            if (lists[select].todo[y].text == ThisIsNum){
                lists[select].todo.splice(y, 1);
            }
        }
    }
}

function creatingToDos() {
    i = 0;
    let todoList = ""

    runThrough();

    for (x in lists[select].todo) {
        if (lists[select].todo[x].completed == false) {
            todoList += `
                <div class="todo ${i}">
                    <div class="contain">
                        <input type="checkbox" name="completeBox" id="completeBox" onclick="checkComp(this)">
                        <p id="currentText">${lists[select].todo[x].text}</p>
                    </div>
                    <div class="contain">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill pencil" viewBox="0 0 16 16" onclick="changeItem(this)">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill trash" viewBox="0 0 16 16" onclick="deleteItem(this)">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                    </div>
                </div>
            `
        }
        else {
            todoList += `
                <div class="todo ${i}">
                    <div class="contain">
                        <input type="checkbox" name="completeBox" id="completeBox" onclick="checkComp(this)" checked>
                        <p id="currentText">${lists[select].todo[x].text}</p>
                    </div>
                    <div class="contain">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill pencil" viewBox="0 0 16 16" onclick="changeItem(this)">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill trash" viewBox="0 0 16 16" onclick="deleteItem(this)">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                    </div>
                </div>
            `
        }
        i++;
    }
    return todoList
}

function creatingListNames() {
    let nameOfList = ""
    let newSelectVal = 1
    for (x in lists) {
        if (newSelectVal == select) {
            nameOfList += `<h2 onclick="selectThis(this)" class="${newSelectVal} active">
            ${lists[x].name}
            </h2>`;
        }
        else {
            nameOfList += `<h2 onclick="selectThis(this)" class="${newSelectVal}">
            ${lists[x].name}
            </h2>`;
        }

        newSelectVal += 1
    }
    return nameOfList;
}

function addNewList() {
    select = Object.keys(lists).length + 1;
    let newListHTML = inputForButton.value;
    inputForButton.value = "";
    listNames.innerHTML += `<h2 class="${select} active">${newListHTML}</h2>`;
    createVar(newListHTML);
    render();
}

function createVar(item) {
    let newVar = {
        name: `${item}`,
        todo: [ {
            text: "Example Task",
            completed: true
        }]
    }
    lists[Object.keys(lists).length + 1] = newVar
}

function deleteItem(item) {
    item.parentElement.parentElement.remove()
    const toDoItem = item.parentElement.parentElement.classList[1]
    lists[select].todo[toDoItem].text = ThisIsNum;
    save();
}

function changeItem(item) {
    const currentItem = item.parentElement.parentElement.children[0].children[1].innerHTML;
    const currentTodoNum = item.parentElement.parentElement.classList
    let replacement = document.createElement("div");
    replacement.innerHTML = `                    
        <input type="text" name="yes" id="addToDo" onchange="replaceTodo(this)" class="${currentTodoNum[1]}" value="${currentItem}">`
    replacement.classList.add('newInput');
    item.parentElement.parentElement.replaceWith(replacement);
    save();
}

function replaceTodo(item) {
    let newTodo = item.value
    let replacement = document.createElement("div")
    const currentTodoNum = item.classList[0]
    replacement.classList.add(`todo`)
    replacement.classList.add(currentTodoNum)

    lists[select].todo[currentTodoNum].text = newTodo 

    if (lists[select].todo[currentTodoNum].completed == true) {
        replacement.innerHTML = `
        <div class="contain">
            <input type="checkbox" name="completeBox" id="completeBox" onclick="checkComp(this)" checked>
            <p id="currentText">${newTodo}</p>
        </div>
        <div class="contain">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill pencil" viewBox="0 0 16 16" onclick="changeItem(this)">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill trash" viewBox="0 0 16 16" onclick="deleteItem(this)">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
        </div>`
    }
    else {
        replacement.innerHTML = `
        <div class="contain">
            <input type="checkbox" name="completeBox" id="completeBox" onclick="checkComp(this)">
            <p id="currentText">${newTodo}</p>
        </div>
        <div class="contain">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill pencil" viewBox="0 0 16 16" onclick="changeItem(this)">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill trash" viewBox="0 0 16 16" onclick="deleteItem(this)">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
        </div>`
    }
    item.parentElement.replaceWith(replacement)
    save()
}

function addTodoInput() {
    const toDoList = document.getElementById('toDoList');
    toDoList.innerHTML += `                    
    <div class="newInput">
        <input type="text" name="yes" id="addToDo" onchange="addTodo(this)">
    </div>`
}

function addTodo(item) {
    item.parentElement.remove();
    let newTodo = item.value;
    const toDoList = document.getElementById('toDoList');

    let tomp = {
        text:`${newTodo}`,
        completed: false
    }

    lists[select].todo.push(tomp);

    toDoList.innerHTML += ` 
    <div class="todo ${i}">
        <div class="contain">
            <input type="checkbox" name="completeBox" id="completeBox" onclick="checkComp(this)">
            <p id="currentText">${newTodo}</p>
        </div>
        <div class="contain">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill pencil" viewBox="0 0 16 16" onclick="changeItem(this)">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill trash" viewBox="0 0 16 16" onclick="deleteItem(this)">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
        </div>
    </div>`
    i++;
    save()
}

function getList(item) {
    item.classList.add('active')

}

function checkComp(item) {
    const toDoItem = item.parentElement.parentElement.classList[1]
    if (lists[select].todo[toDoItem].completed == true) {
        lists[select].todo[toDoItem].completed = false;
    }
    else {
        lists[select].todo[toDoItem].completed = true;
    }

}

function selectThis(item) {
    select = item.classList.item(0)
    render()
}

function save() {
    localStorage.setItem('currentList', JSON.stringify(currentList)); 
    localStorage.setItem('lists', JSON.stringify(lists));
   }
   
function clearCheck() {
    for (x in lists[select].todo) {
        if (lists[select].todo[x].completed == true) {
            lists[select].todo[x].text = ThisIsNum
        }
    }

    runThrough();
    render();
}

function listDel() {
    select = Number(select)
    if (select !== Object.keys(lists).length) {
        for (let p = select; p < Object.keys(lists).length; p++) {
            lists[p] = lists[p+1]
        }
    }
    else {
        select = Object.keys(lists).length-1
    }
    delete lists[Object.keys(lists).length]
    // if (Object.keys(lists).length > select) {
    //     select = Number(select) + 1
    // }
    // else {
    //     select = Number(select) - 1
    // }
    
    render()
}
function listEdit(item) {
    if (item.parentElement.parentElement.children[0].tagName == "H1") {
        let oldItemName = item.parentElement.parentElement.children[0].innerHTML
        let replacement3 = document.createElement("div");
        replacement3.innerHTML = `                    
            <input type="text" name="yes" id="changeName" onchange="listNameChange(this)" placeholder="${oldItemName}">`
        replacement3.classList.add('newInput');
        item.parentElement.parentElement.children[0].replaceWith(replacement3);
    }
}
function listNameChange(item) {
    let newListName = item.value;
    let replacement2 = document.createElement("h1");
    replacement2.innerHTML = `${newListName}`
    item.replaceWith(replacement2)
    lists[select].name = newListName;
    render()
}

function save() {
    localStorage.setItem('lists', JSON.stringify(lists));
}
function load() {
    lists = JSON.parse(localStorage.getItem('lists'))
}