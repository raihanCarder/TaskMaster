import createListManager from "./listManager.js";
import createItemManager from "./itemManager.js";

export let lists = null;
export let items = null;

export function initState() {
    lists = createListManager();
    items = createItemManager(lists);
}