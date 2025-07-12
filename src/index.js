import "./styles.css";
import addItem from "./TodoItem";
import getItemInput from "./TodoInput";
import initPage from "./initPage";
import createListManager from "./listManager";

function logicApp() {
    const lists = createListManager();
    initPage(lists);
}


window.addEventListener("DOMContentLoaded", logicApp);
