const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


function addTodo(e){
    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');

    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML  = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML  = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteCheck(e){
const item = e.target;

if(item.classList[0] === 'trash-btn'){
    const taskList = item.parentElement;
    taskList.classList.add('fall');
    taskList.addEventListener('transitionend', function(){
        taskList.remove();
    });
 }
 if(item.classList[0] === 'complete-btn'){
     const taskList = item.parentElement;
     taskList.classList.toggle('completed')
 }
}

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
