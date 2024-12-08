"use strict";

const NEW_TASK_INPUT = document.getElementById("new-task");
const ADD_TASK_BTN = document.querySelector(".add-task-btn");
const ALL_TASKS = document.getElementById("all-tasks");
const NOT_DONE = document.getElementById("not-done");
const COMPLITED = document.getElementById("complited");
const DELETE = document.querySelector(".delete");


ADD_TASK_BTN.addEventListener("click", addNewTask);
ALL_TASKS.addEventListener("click", removeElement);
COMPLITED.addEventListener("click", removeElement);

function addNewTask() {
    const inputValue = NEW_TASK_INPUT.value;
    const listItem = document.createElement("li");
    listItem.classList.add("all");
    listItem.innerText = inputValue;
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("done");
    checkBtn.innerHTML = "&check;"
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "&cross;";
    
    ALL_TASKS.appendChild(listItem);
    listItem.appendChild(checkBtn);
    listItem.appendChild(deleteBtn);
        // ALL_TASKS.innerHTML = `<li>${inputValue}</li>`;
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