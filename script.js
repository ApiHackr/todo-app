"use strict";

const NEW_TASK_INPUT = document.getElementById("new-task");
const ADD_TASK_BTN = document.querySelector(".add-task-btn");
const ALL_TASKS = document.getElementById("all-tasks");
const NOT_DONE = document.getElementById("not-done");
const COMPLITED = document.getElementById("complited");

function addNewTask() {
    let inputValue = NEW_TASK_INPUT.value;
    let listItem = document.createElement("li");
    let checkBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    ADD_TASK_BTN.onclick = () => {
        listItem.classList.add("all");
        listItem.innerText = inputValue;
        ALL_TASKS.appendChild(listItem);
        checkBtn.classList.add("done");
        checkBtn.innerHTML = "&check;"
        deleteBtn.classList.add("delete");
        deleteBtn.innerHTML = "&cross;" 
        listItem.appendChild(checkBtn);
        listItem.appendChild(deleteBtn);
        // ALL_TASKS.innerHTML = `<li>${inputValue}</li>`;
    }
}
addNewTask();

        // <li class="all">
        //     New ToDo
        //     <button class="done">&check;</button>
        //     <button class="delete">&cross;</button>
        // </li>