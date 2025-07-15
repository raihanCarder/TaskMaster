import "./styles.css";
import initPage from "./initPage";
import createListManager from "./listManager";
import createItemManager from "./itemManager";

function logicApp() {
    const lists = createListManager();
    const items = createItemManager(lists);
    initPage(lists, items);
}




window.addEventListener("DOMContentLoaded", logicApp);
