const deleteAllBtn = document.getElementById('del-btn');
const addBtn = document.getElementById('add-btn');
const todoInp = document.querySelector('input');
const parentUl = document.querySelector('.list-group-flush');

let items;


function getItemsFromLS(){
    if(localStorage.getItem('items') === null){
        items = [];
    }
    else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}


function setItemsToLocalStorage(txt){
    items = getItemsFromLS();
    items.push(txt);
    localStorage.setItem('items', JSON.stringify(items));
}

function createCons(msg,index){
    //create elemtents and attriubte of them
    let childList = document.createElement('li');
    childList.className = "list-group-item d-flex justify-content-between";
    let col1 = document.createElement('div');
    col1.className="col-1";
    let col11 = document.createElement('div');
    col11.className="col-11";
    let todoSentence = document.createElement('p');
    todoSentence.setAttribute('id','todo');
    let closeBtn = document.createElement('button');
    closeBtn.setAttribute('class','btn-close');
    //concat
    col11.appendChild(todoSentence);
    col1.appendChild(closeBtn);
    childList.appendChild(col11);
    childList.appendChild(col1);
    //
    parentUl.appendChild(childList);

    todoSentence.innerHTML = msg;
    closeBtn.addEventListener('click' ,function(){
        childList.remove();
        items.splice(index,1);
        localStorage.setItem('items', JSON.stringify(items));
    });
}


addBtn.addEventListener('click', function(){
    parentUl.innerHTML = "";
    setItemsToLocalStorage(todoInp.value);
    items.forEach((element,index) => {
        createCons(element,index)
    });
    todoInp.value = "";
});


deleteAllBtn.addEventListener('click', function(){
    parentUl.innerHTML = "";
    localStorage.clear();
})
