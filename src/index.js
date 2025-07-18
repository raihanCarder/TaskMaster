import "./styles.css";
import initPage from "./initPage.js";
import initStartingLists from "./initStartingLists.js";
import { lists, items, initState } from "./state.js";

function logicApp() {
    initState();

    if (localStorage.getItem("todoData")) {
        console.log("load data");
        lists.load();
    }
    else {
        console.log("No Data init Default");
        initStartingLists(lists);
    }
    initPage(lists, items);
}

window.addEventListener("DOMContentLoaded", logicApp);
