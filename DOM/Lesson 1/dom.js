// const headers = document.getElementsByTagName('h2');
// const list = document.getElementsByClassName('item');
// const button = document.getElementById("submit");

// console.log(list)

// const headers = document.querySelector("h2");
// const list = document.querySelectorAll('.item');
// const button = document.querySelector('#submit');

// console.log(headers,list,button)

const items = document.getElementsByClassName('item');
const todoList = document.getElementById('todo-list');
const nodeItems = document.querySelector('#todo-list');
const newItem = document.createElement('li');
newItem.classList.add('item');
newItem.innerText = "new added item"
todoList.appendChild(newItem);


console.log(items)

