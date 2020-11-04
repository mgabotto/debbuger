
// LISTENERS
const category = document.getElementById('typeTask');
const responsable = document.getElementById('resp');
const description = document.getElementById('description');
const level = document.getElementById('level');
const btnAdd = document.querySelector('.btnAdd');

const itemsContainer = document.querySelector('.items');

// VARIABLES

let itemStore = [];
let newItem = {}

// ADD ITEM


btnAdd.addEventListener('click', function () {

    if (description.value) {
        getValues();
        addItem();
    } else {
        alert('Complete con una descripción de la tarea o problema ')
    }
})

// function submit () {
//     getValues();
//     addItem();
// }



// INPUT

function getValues() {
    newItem.category = category.value;
    newItem.responsable = responsable.value;
    newItem.description = description.value;
    newItem.level = level.value;

}


function addItem() {

    // ID BUG / TASK
    let date = new Date();
    let id = date.getTime().toString()


    // ADDING ITEM TO UI
    let item = document.createElement('div');
    item.classList.add('card')


    item.innerHTML = `  
    <p class="type-c"> ${newItem.category} </p>
    <div class="desc">
    <p> ${newItem.description}</p> </div>
    <p class="dom"> #${id} </p>
    <div class="details">
        <p class="square"> ${newItem.responsable} </p>
        <p class="square ${newItem.level}"> ${newItem.level}</p>
    </div>`

    itemsContainer.appendChild(item)

    description.value = '';
}