import "./styles.css";
import addItem from "./TodoItem";
import addList from "./listItem";
import getItemInput from "./TodoInput";
import initPage from "./initPageUI";


function startPage() {

    // Init default btns and UI
    initPage();
    startApp();
}

function startApp() {
    const allList = addList("All");
    const flagList = addList("Flagged");
    const todayList = addList("Today");
}

window.addEventListener("DOMContentLoaded", startPage);
