

// <!-- list-test-8b1e0.web.app -->




// LISTENERS

const db = firebase.firestore();

const form = document.querySelector('form');

const taskCategory = document.getElementById('typeTask');
const taskResponsable = document.getElementById('resp');
const taskDescription = document.getElementById('description');
const taskLevel = document.getElementById('level');
const btnAdd = document.querySelector('#btn');

const itemsContainer = document.querySelector('.items');


// VARIABLES

let itemStore = [];
let newItem = {}


// DATASTORE DATA





const storeTask = (category, responsable, description, importance) => {

    db.collection(`tasks`).doc().set({
        category,
        responsable,
        description,
        importance,
    })
}


const deleteTask = (id) => db.collection('tasks').doc(id).delete()

const getTasks = () => db.collection('tasks').get();
const getUpdate = (callback) => db.collection('tasks').onSnapshot(callback)


window.addEventListener('DOMContentLoaded', async (e) => {
    // const querySnapshot = await getTasks();

    getUpdate((querySnapshot) => {


        itemsContainer.innerHTML = '';
        querySnapshot.forEach(doc => {

            let data = doc.data();
            data.id = doc.id;
            
            itemsContainer.innerHTML += `        
            <div class="card" id="">
            <div class="head">
                <p class="type-c"> ${data.category} </p>
                <i class="x fas fa-times fa-lg btnDelete" data-id="${data.id}"></i>
            </div>
            <div class="desc">
                <p> ${data.description}</p>
            </div>
            <p class="dom"> ${data.id} </p>
            <div class="details">
                <p class="square"> ${data.responsable} </p>
                <p class="square ${data.importance}"> ${data.importance} </p>
            </div>
            </div>`;


            const deleteBtn = document.querySelectorAll('.btnDelete');
            deleteBtn.forEach((btn) => {
                btn.addEventListener('click', async (x)=> {
                    // console.log(x.target.dataset.id);
                    await deleteTask(x.target.dataset.id)
                })
            })
        })
    })
})



btnAdd.addEventListener('click', async (e) => {

    const category = taskCategory.value;
    const responsable = taskResponsable.value;
    const description = taskDescription.value;
    const importance = taskLevel.value;

    if (!description) {
        return alert('Completar descripcion')
    }

    await getTasks();

    await storeTask(category, responsable, description, importance);

    form.reset();

})