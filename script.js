"use strict";

const newTask = document.getElementById("new-task");
const addTaskBtn = document.querySelector(".add-task-btn");
const allTasks = document.getElementById("all-tasks");
const notDone = document.getElementById("not-done");
const complited = document.getElementById("complited");

const tasks = [];
let fragment = document.createDocumentFragment();

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const inputValue = newTask.value.trim();
  if (inputValue) {
    tasks.push({description: inputValue, done: false});
    for (let task of tasks) {
      let li = document.createElement('li');
      let para = document.createElement('p');
      let changeDoneBtn = document.createElement('button');
      let deleteBtn = document.createElement('button');
      para.textContent = task.description;
      changeDoneBtn.innerHTML = '&#10003;';
      changeDoneBtn.classList = 'change-done';
      deleteBtn.innerHTML = '&#10007;';
      deleteBtn.classList = 'delete';
      li.appendChild(para);
      li.appendChild(changeDoneBtn);
      li.appendChild(deleteBtn);
      fragment.append(li);
    }
    allTasks.innerHTML = '';
    allTasks.append(fragment);
  }
  newTask.value = '';
};

allTasks.addEventListener('click', (e) => {
  if(e.target.classList == 'delete') {
    e.target.parentElement.remove();
  }
})
/*
<template>
  <div id="aufgaben-app">
    <h1>To-do-Liste</h1>
    <p>
      <label for="neueAufgabe">Weitere Aufgaben</label>
      <input id="neueAufgabe" type="text" v-model="neueAufgabe">
      <button class="hinzu" @click="aufgabeHinzu">hinzufügen</button>
    </p>
    <h2>Alle Aufgaben</h2>
    <ul>
      <li v-for="(aufgabe, index) in aufgaben" :key="index"
      :class="{'abgeschlossen' : aufgabe.fertig}">
        <p>{{ aufgabe.beschreibung }}</p>
        <button class="erledigtWechseln" @click="erledigtWechseln(index)">&#10003;</button>
        <button class="loeschen" @click="loeschen(index)">&#10007;</button>
      </li>
    </ul>
    <h3>Noch tun</h3>
      <ul>
        <li v-for="aufgabe in nichterledigt" :key="aufgabe.beschreibung">
          {{ aufgabe.beschreibung }}
        </li>
      </ul>
    <h3>Abgeschlossen</h3>
    <ul>
      <li v-for="aufgabe in erledigt" :key="aufgabe.beschreibung">
        {{ aufgabe.beschreibung }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      aufgaben: [],
      neueAufgabe: '',
    };
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
      const text = this.neueAufgabe.trim();
      if (text) {
        this.aufgaben.push({ beschreibung: this.neueAufgabe, fertig: false });
        this.neueAufgabe = '';
      }
    },
    loeschen(index) {
      this.aufgaben.splice(index, 1);
    },
    erledigtWechseln(index) {
      this.aufgaben[index].fertig = !this.aufgaben[index].fertig;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    font: 100% sans-serif;
  }
  #aufgaben-app {
    padding: 1rem;
  }
  h1,
  h2,
  h3 {
    font-size: 100%;
  }
  label {
    display: block;
  }
  ul {
    max-width: 22rem;
    list-style: none;
    padding-left: 0;
  }
  li {
    margin: 5px 0;
    padding: 5px;
    border-radius: 4px;
    border: #a9e8e3 1px solid;
    display: flex;
    align-items: center;
  }
  li p {
    margin: 0;
  }
  li button {
    border-radius: 4px;
    color: #fff;
  }
  .erledigtWechseln {
    margin-left: auto;
    background-color: #ff4112;
  }
  .loeschen {
    background-color: orange;
  }
  .abgeschlossen .erledigtWechseln {
    background-color: #1c89ff;
  }
  .abgeschlossen p {
    text-decoration: line-through;
  }
</style>
*/

// addTaskBtn.addEventListener("click", addNewTask);
// allTasks.addEventListener("click", removeElement);
// complited.addEventListener("click", removeElement);

// function addNewTask() {
//     const inputValue = newTaskInput.value;
//     const listItem = document.createElement("li");
//     listItem.classList.add("all");
//     listItem.innerText = inputValue;
//     const checkBtn = document.createElement("button");
//     checkBtn.classList.add("done");
//     checkBtn.innerHTML = "&check;"
//     const deleteBtn = document.createElement("button");
//     deleteBtn.classList.add("delete");
//     deleteBtn.innerHTML = "&cross;";
    
//     allTasks.appendChild(listItem);
//     listItem.appendChild(checkBtn);
//     listItem.appendChild(deleteBtn);
//     allTasks.innerHTML = `<li>${inputValue}</li>`;
// }


// function removeElement(e) {
//     const item = e.target;

//     if(item.classList[0] === "delete") {
//         const toRemove = item.parentElement;
//         toRemove.remove();
//     }
// }
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

*/