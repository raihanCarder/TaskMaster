import "./styles.css";
import initPage from "./initPage.js";
import initStartingLists from "./initStartingLists.js";
import { lists, items, initState } from "./state.js";
import initDashListUI from "./initDashListUI.js";

function logicApp() {
    initState();

    if (localStorage.getItem("todoData")) {
        console.log("load data");
        initDashListUI();
        lists.load();
    }
    else {
        console.log("No Data init Default");
        initStartingLists(lists);
        initDashListUI();
    }
    initPage(lists, items);
}

window.addEventListener("DOMContentLoaded", logicApp);
