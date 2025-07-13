import addItem from "./TodoItem";
import { format } from 'date-fns';

export default function createItemManager(lists) {
    function addNewItem(name, date, desc, priority, flagged, list) {
        const today = format(new Date(), 'yyyy-MM-dd');
        console.log(today);

        const tempItem = addItem(name, date, desc, priority, flagged, list);
        const index = lists.findList(tempItem.getList());

        // add list to all lists

        lists.getListWithIndex(0).addToList(tempItem);

        // if flagged add to list flagged

        if (tempItem.flagged) {
            lists.getListWithIndex(1).addToList(tempItem);
        }

        // if today add to list

        if (today === date) {
            lists.getListWithIndex(2).addToList(tempItem);
        }

        // adds to list if not all list

        if (index !== 0) {
            lists.getList()[index].addToList(tempItem);
        }
    }
    return { addNewItem }
}