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