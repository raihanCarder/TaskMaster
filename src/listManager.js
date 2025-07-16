import addList from "./listItem";
import loadContent from "./contentUI";
import listIcon from "./images/list-icon.svg"
import addItem from "./TodoItem";

export default function createListManager() {
    const dashboardList = document.getElementById("dashboard-lists");

    const lists = [];
    let currentListId = "";

    function addNewList(name, color = "", image = listIcon) {
        const tempList = color === "" ? addList(name) : addList(name, color);
        lists.push(tempList);

        _addToDom(lists[lists.length - 1], image);

        save();

        return tempList;
    }


    function findList(id) {
        const index = lists.findIndex((list) => list.getId() === id);
        return index;
    }

    function getList() {
        return lists;
    }

    function getListWithIndex(index) {
        return lists[index];
    }

    function getCurrentListId() {
        return currentListId;
    }

    function _addToDom(obj, image = listIcon) {
        const id = obj.getId();
        const newListBtn = document.createElement("button");

        newListBtn.classList.add("new-list-item-btn");
        newListBtn.id = `btn-${id}`;

        const circle = document.createElement("div");
        circle.classList.add("circle-list-icon-outline");
        circle.style.backgroundColor = obj.getColor();

        const img = document.createElement("img");
        img.src = image;
        img.alt = "List icon";
        img.classList.add("icon-main");

        const text = document.createElement("p");
        text.textContent = obj.getName();
        text.classList.add("ellipsis");

        circle.appendChild(img);
        newListBtn.appendChild(circle);
        newListBtn.appendChild(text);
        dashboardList.appendChild(newListBtn);

        newListBtn.addEventListener("click", (e) => {
            const id = e.currentTarget.id.substring(4);
            currentListId = id;
            loadContent(id, lists);
        });
    }

    function _listToPlain(list) {
        return {
            id: list.getId(),
            name: list.getName(),
            color: list.getColor(),
            items: list.getItems().map(_itemToPlain),
        };
    }

    function _itemToPlain(item) {
        return {
            id: item.getId(),
            name: item.getName(),
            date: item.getDate(),
            desc: item.getDesc(),
            priority: item.getPriority(),
            flagged: item.flagged,
            list: item.getList(),
            isComplete: item.isComplete
        };
    }

    function save() {
        const plain = lists.map(_listToPlain);
        localStorage.setItem("todoData", JSON.stringify(plain));
    }

    function load() {
        const raw = localStorage.getItem("todoData");

        if (!raw) return;

        const savedLists = JSON.parse(raw);

        savedLists.forEach(savedList => {

            const listObj = addNewList(savedList.name, savedList.color);

            savedList.items.forEach(savedItem => {
                const itemObj = addItem(
                    savedItem.name,
                    savedItem.date,
                    savedItem.desc,
                    savedItem.priority,
                    savedItem.flagged,
                    listObj.getId(),
                    savedItem.isComplete
                );

                listObj.addToList(itemObj);
            });
        });
    }

    return { getList, addNewList, getListWithIndex, findList, getCurrentListId, save, load }
}
