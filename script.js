"use strict";

const NEW_TASK_INPUT = document.getElementById("new-task");
const ADD_TASK_BTN = document.getElementById("add-task-btn");
const ALL_TASKS = document.getElementById("all-tasks");
const NOT_DONE = document.getElementById("not-done");
const COMPLITED = document.getElementById("complited");

function addNewTask() {
    let inputValue = NEW_TASK_INPUT.value;
    // ADD_TASK_BTN.onclick = () => {}
    ALL_TASKS.innerHTML = inputValue;
}
addNewTask();