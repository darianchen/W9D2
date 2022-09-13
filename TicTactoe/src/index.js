
const View = require('./ttt-view');
const Game = require('../ttt_node/game');

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let game = new Game();
  let grid = document.querySelector('.ttt')

  let view = new View(game, grid);
});

// const lsItems = JSON.parse(localStorage.getItem('items')) || [];
// const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

// //---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
// //create event handler that adds to our grocery list
// const addItem = (e) => {
//     e.preventDefault();

//     let input = document.querySelector("input[name='add-grocery']");
//     let value = input.value;

//     const item = { value: value } // { value: 'eggs' }

//     // add this new item to our localStorage items
//     lsItems.push(item);
//     localStorage.setItem("items", JSON.stringify(lsItems));

//     updateList();

//     groceryForm.reset();
    
// }

// //create action to render grocery list items
// const updateList = () => {

//     // method 1: using string html element
//     // groceries.innerHTML = lsItems.map(item => {
//     //     return `<li>${item.value}</li>`
//     // })

   
//     // method 2: using document.createElement
//     if (!groceries.hasChildNodes()) {
//         lsItems.map(item => {
//             let li = document.createElement('li');
//             li.innerText = item.value;
//             groceries.appendChild(li);
//         })
//     } else {
//         let li = document.createElement('li');
//         li.innerText = lsItems[lsItems.length - 1].value;
//         groceries.appendChild(li);
//     }
// }

// //create event handler to cross out list items on click

