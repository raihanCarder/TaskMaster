import "./styles.css";
import initPage from "./initPage";
import createListManager from "./listManager";
import createItemManager from "./itemManager";
import initStartingLists from "./initStartingLists";

function logicApp() {
    const lists = createListManager();
    const items = createItemManager(lists);
    initStartingLists(lists);
    initPage(lists, items);
}

window.addEventListener("DOMContentLoaded", logicApp);
