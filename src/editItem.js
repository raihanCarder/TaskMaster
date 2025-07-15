import loadContent from "./contentUI";

export default function editItem(id, name, date, desc, priority, isFlagged, lists, currentDOMListId) {
    console.log(lists);
    for (let num in lists) {
        const list = lists[num];
        const index = list.getItems().findIndex((item) => item.getId() === id);
        if (index !== -1) {
            const item = list.getItems()[index];
            item.setName(name);
            item.setDesc(desc);
            item.setPriority(priority);
            item.flagged = isFlagged;
        }
    }

    // now must check edge cases and see if list or date or flagged was changed and remove or add

    loadContent(currentDOMListId, lists);
}