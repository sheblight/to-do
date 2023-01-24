import style from "./style.css";

// testing todo modal interactivity
const todoModal = document.querySelector(".todo-modal-wrapper");
const todoExit = document.querySelector("button.todo-close");
const entry = document.querySelector(".todo-entry");
todoExit.onclick = ()=>{todoModal.classList.add("hidden")};
entry.onclick = ()=>{todoModal.classList.remove("hidden")};