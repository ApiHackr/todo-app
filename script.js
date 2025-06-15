"use strict";

const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.querySelector(".add-task-btn");
const allTasks = document.getElementById("all-tasks");
const notDone = document.getElementById("not-done");
const complited = document.getElementById("complited");
const delete = document.querySelector(".delete");


addTaskBtn.addEventListener("click", addNewTask);
allTasks.addEventListener("click", removeElement);
complited.addEventListener("click", removeElement);

function addNewTask() {
    const inputValue = newTaskInput.value;
    const listItem = document.createElement("li");
    listItem.classList.add("all");
    listItem.innerText = inputValue;
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("done");
    checkBtn.innerHTML = "&check;"
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "&cross;";
    
    allTasks.appendChild(listItem);
    listItem.appendChild(checkBtn);
    listItem.appendChild(deleteBtn);
        // allTasks.innerHTML = `<li>${inputValue}</li>`;
}


function removeElement(e) {
    const item = e.target;

    if(item.classList[0] === "delete") {
        const toRemove = item.parentElement;
        toRemove.remove();
    }
}
        // <li class="all">
        //     New ToDo
        //     <button class="done">&check;</button>
        //     <button class="delete">&cross;</button>
        // </li>


        // <li class="complited">
        //     Done
        //     <button class="delete">&cross;</button>
        // </li>


/* var app = new Vue({
    el: "#aufgabenApp",
    data: {
      aufgaben: JSON.parse(localStorage.getItem('aufgaben')) || [],
      neueAufgabe: ''
    },
    computed: {
      erledigt() {
        return this.aufgaben.filter(aufgabe => aufgabe.fertig);
      },
      nichterledigt() {
        return this.aufgaben.filter(aufgabe => !aufgabe.fertig);
      },
    },
    methods: {
      aufgabeHinzu() {
        this.aufgaben.push({beschreibung: this.neueAufgabe, fertig: false});
        this.neueAufgabe = '';
        localStorage.setItem('aufgaben', JSON.stringify(this.aufgaben));
      },
      loeschen(index) {
        this.aufgaben.splice(index, 1);
        localStorage.setItem('aufgaben', JSON.stringify(this.aufgaben));
      },
      erledigtWechseln(index) {
        this.aufgaben[index].fertig = !this.aufgaben[index].fertig;
        localStorage.setItem('aufgaben', JSON.stringify(this.aufgaben));
      }
    }
  });



<div id="aufgabenApp">
            <h1>To-do-Liste</h1>
            <p>
                <label for="neueAufgabe">Weitere Aufgaben</label>
                <input type="text" id="neueAufgabe" v-model="neueAufgabe" placeholder="Neue Aufgabe eingeben">
                <button class="hinzu" @click="aufgabeHinzu">hinzufügen</button>
            </p>
            <h1>Alle Aufgaben</h1>
            <ul>
                <li v-for="(aufgabe, index) in aufgaben" :class="{ 'abgeschlossen' : aufgabe.fertig}">
                    <p>{{aufgabe.beschreibung}}</p>
                    <button class="erledigtWechseln" @click="erledigtWechseln(index)">&#10004;</button>
                    <button class="loeschen" @click="loeschen(index)">&#10008;</button>
                </li>
            </ul>
            <h2>Noch tun</h2>
            <ul>
                <li v-for="aufgabe in nichterledigt">{{ aufgabe.beschreibung}}</li>
            </ul>
            <h2>Abgeschlossen</h2>
            <ul>
                <li v-for="aufgabe in erledigt">{{ aufgabe.beschreibung}}</li>
            </ul>
</div>
*/