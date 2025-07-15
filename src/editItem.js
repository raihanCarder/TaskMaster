import loadContent from "./contentUI";
import { format } from 'date-fns';


export default function editItem(id, name, date, desc, priority, isFlagged, selectList, lists, currentDOMListId) {

    _addOrRemoveFromFlagList(lists, id, isFlagged);
    _addOrRemoveFromTodayList(lists, id, date);
    _addOrRemoveFromCustomList(lists, id, selectList);

    for (let num in lists) {
        const list = lists[num];
        const index = list.getItems().findIndex((item) => item.getId() === id);
        if (index !== -1) {
            const item = list.getItems()[index];
            item.setName(name);
            item.setDate(date);
            item.setDesc(desc);
            item.setPriority(priority);
            item.setList(selectList);
            item.flagged = isFlagged;
        }
    }

    loadContent(currentDOMListId, lists);
}

function _addOrRemoveFromFlagList(lists, id, isFlagged) {
    const list = lists[1];
    const allList = lists[0];
    let item;
    let itemInList = true;

    let index = list.getItems().findIndex((item) => item.getId() === id);

    if (index === -1) {
        index = allList.getItems().findIndex((item) => item.getId() === id);
        itemInList = false;
        item = allList.getItems()[index];
    }
    else {
        item = list.getItems()[index];
    }

    if (isFlagged !== item.flagged && isFlagged) { // if user makes flagged
        list.addToList(item);

    } else if (isFlagged !== item.flagged && item.flagged && itemInList) { // if user makes unflagged
        list.removeFromList(item);
    }
    else {
        // nothing changed
    }
}

function _addOrRemoveFromTodayList(lists, id, newDate) {
    const todayList = lists[2];
    const allList = lists[0];
    const today = format(new Date(), 'yyyy-MM-dd');
    let item;
    let itemInList = false;
    let index = todayList.getItems().findIndex((item) => item.getId() === id);

    // if not in todayList get info from all

    if (index === -1) {
        index = allList.getItems().findIndex((item) => item.getId() === id);
        item = allList.getItems()[index];
    }
    else {
        item = todayList.getItems()[index];
        itemInList = true;
    }

    if (newDate !== today && itemInList) {
        todayList.removeFromList(item);
    }
    else if (newDate === today && !itemInList) {
        todayList.addToList(item);
    }
    else {
        // random date then nun happens
    }
}

function _addOrRemoveFromCustomList(lists, itemId, selectListId) {
    const allList = lists[0];

    const listIndex = lists.findIndex((list) => list.getId() === selectListId);
    const list = lists[listIndex];

    let item;

    let itemIndex = list.getItems().findIndex((item) => item.getId() === itemId);

    if (itemIndex === -1) {
        itemIndex = allList.getItems().findIndex((item) => item.getId() === itemId);
        item = allList.getItems()[itemIndex];
    }
    else {
        item = list.getItems()[itemIndex];
    }


    // case where item in old list and wants to move to same old list

    if (item.getList() === selectListId) {
        return;
    }

    // case where item in custom list and getting moved to all

    if (item.getList() !== allList.getId() && selectListId === allList.getId()) {
        const oldListId = item.getList();
        const index = lists.findIndex((list) => list.getId() === oldListId);
        lists[index].removeFromList(item);
    }

    // case where old list is all and now getting put in custom list 

    if (item.getList() === allList.getId() && selectListId !== allList.getId()) {
        list.addToList(item);
    }

    // case where item in old custom and now in new custom

    if (item.getList() !== allList.getId() && selectListId !== allList.getId()) {
        const oldListId = item.getList();
        const index = lists.findIndex((list) => list.getId() === oldListId);
        lists[index].removeFromList(item);

        list.addToList(item);
    }
}

