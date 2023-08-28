//Tüm Elementleri Seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");



let todos = [];
runEvent()

function runEvent(){
    form.addEventListener("submit",addTodo);

}

function addTodo (e){
   let inputText = addInput.value;
    if(inputText===null || inputText==""){
        alert("please enter todo")
    }
    else{
       addTodoToUi(inputText);
       addToStorage(inputText);
    } 

    
    e.preventDefault();
    
}


function addTodoToUi(newTodo){

     const li = document.createElement("li")
     li.className = "list-group-item d-flex justify-content-between";
     li.textContent = newTodo;

     const a = document.createElement("a")
     a.href = "#"
     a.className = "delete-item"

     const i = document.createElement("i")
     i.className ="fa fa-remove"

     a.appendChild(i)
     li.appendChild(a)
     todoList.appendChild(li);

     addInput.value =""

    
}

function addToStorage(newTodo){
    checkStorage()
    todos.push(newTodo)
    localStorage.setItem("todos",JSON.stringify(todos))
}

function checkStorage(){
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
       todos = JSON.parse(localStorage.getItem("todos"))
    }
}
