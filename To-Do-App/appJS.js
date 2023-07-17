

const TodoList = document.querySelector('.my-to-do-list');
const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#addButton')

function addToDo(){
    TodoList.innerHTML += `<div class="row m-3">
                                <div class="col-1 p-2">
                                    <img class="todo-uncheck-img" src="images/unchecked.png" style="width: 35px;">
                                </div>
                                <div class="col-9 mt-2"><p class="todo-unchecked-yazi">${todoInput.value}</p></div>
                                <div class="col-1 mt-2 p-1 ms-4"><button class="btn btn-close ms-5"></button></div>
                            </div>`
} 

addButton.addEventListener('click', addToDo);


document.addEventListener('click', function(e){
     const clickedElement = e.target;

  if (clickedElement.classList.contains('todo-unchecked-yazi')) {
    const containerElement = clickedElement.closest('.my-to-do-list');
    console.log(containerElement)
    const imgElement = containerElement.querySelector('.todo-uncheck-img');
    if(imgElement.classList.contains('todo-uncheck-img')){
        imgElement.src = '/images/checked.png';
        imgElement.classList.remove('todo-uncheck-img');
        imgElement.classList.add('todo-check-img');
    }else{
        imgElement.src = '/images/unchecked.png';
        imgElement.classList.remove('todo-check-img');
        imgElement.classList.add('todo-uncheck-img');
    }
    

    clickedElement.classList.remove('todo-unchecked-yazi');
    clickedElement.classList.add('todo-checked-yazi');
  } else if (clickedElement.classList.contains('todo-checked-yazi')) {
    const containerElement = clickedElement.closest('.my-to-do-list');
    const imgElement = containerElement.querySelector('.todo-check-img');
    if(imgElement.classList.contains('todo-uncheck-img')){
        imgElement.src = '/images/checked.png';
        imgElement.classList.remove('todo-uncheck-img');
        imgElement.classList.add('todo-check-img');
    }else{
        imgElement.src = '/images/unchecked.png';
        imgElement.classList.remove('todo-check-img');
        imgElement.classList.add('todo-uncheck-img');
    }

    clickedElement.classList.remove('todo-checked-yazi');
    clickedElement.classList.add('todo-unchecked-yazi');
  }
})


  
