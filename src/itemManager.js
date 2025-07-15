import addItem from "./TodoItem";
import { format } from 'date-fns';
import loadContent from "./contentUI";

export default function createItemManager(lists) {
    function addNewItem(name, date, desc, priority, flagged, list) {
        const today = format(new Date(), 'yyyy-MM-dd');

        const tempItem = addItem(name, date, desc, priority, flagged, list);
        const index = lists.findList(tempItem.getList());

        // add list to all lists
        lists.getListWithIndex(0).addToList(tempItem);

        // if flagged add to list flagged

        if (tempItem.flagged) {
            lists.getListWithIndex(1).addToList(tempItem);
        }

        // if today add to today list

        if (today === date) {
            lists.getListWithIndex(2).addToList(tempItem);
        }

        // adds to list if not all list

        if (index !== 0 && index !== 1 && index !== 2) {
            lists.getList()[index].addToList(tempItem);
        }

        // Updates Dom if current list is list getting new task

        if (lists.getCurrentListId() === lists.getListWithIndex(0).getId()) {
            loadContent(lists.getListWithIndex(0).getId(), lists.getList());
        }
        else if (tempItem.flagged && lists.getCurrentListId() === lists.getListWithIndex(1).getId()) {
            loadContent(lists.getListWithIndex(1).getId(), lists.getList());
        }
        else if (today === date && lists.getCurrentListId() === lists.getListWithIndex(2).getId()) {
            loadContent(lists.getListWithIndex(2).getId(), lists.getList());

        }
        else if (lists.getCurrentListId() === list) {
            loadContent(list, lists.getList());
        }

    }

    return { addNewItem }
}