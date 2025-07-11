import "./styles.css";
import addItem from "./TodoItem";
import addList from "./listItem";
import getItemInput from "./TodoInput";
import initPage from "./initPageUI";
import listInput from "./listInput";

function logicApp() {

    initPage();
    const addListBtn = document.getElementById("add-list-btn");
    const newListModal = listInput(addNewList);

    addListBtn.addEventListener("click", () => newListModal.show());

    // maybe make all Lists module
    const lists = [];

    function addNewList(name) {
        lists.push(addList(name))
    }

    const allList = addList("All");
    const flagList = addList("Flagged");
    const todayList = addList("Today");
}

function everyList() {
    const dashboardList = document.getElementById("dashboard-lists");

    const lists = [];

    function addNewList(name, color = "") {
        if (color = "") {
            const tempList = addList(name);
            lists.push(tempList);
        }
        else {
            const tempList = addList(name, color);

            lists.push(tempList);
        }
        _addToDom();
    }

    function _addToDom() {
    }
}


window.addEventListener("DOMContentLoaded", logicApp);
