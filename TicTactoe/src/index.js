const View = require ()
const Game = require ('game')

document.addEventListener("DOMContentLoaded", () => {
  e.preventDefault();


//-

//create action to render grocery list items
const updateList = () => {

    // method 1: using string html element
    // groceries.innerHTML = lsItems.map(item => {
    //     return `<li>${item.value}</li>`
    // })

   
    // method 2: using document.createElement
    if (!groceries.hasChildNodes()) {
        lsItems.map(item => {
            let li = document.createElement('li');
            li.innerText = item.value;
            groceries.appendChild(li);
        })
    } else {
        let li = document.createElement('li');
        li.innerText = lsItems[lsItems.length - 1].value;
        groceries.appendChild(li);
    }
}

//create event handler to cross out list items on click
const markAsDone = (e) => {
    // e.stopPropagation();

    // debugger
    let ele = e.target; // list item of noodles
    ele.classList.toggle('done');
}
