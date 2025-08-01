import addList from "./listItem";
import loadContent from "./contentUI";
import listIcon from "./images/list-icon.svg";
import addItem from "./TodoItem";
import inbox from "./images/inbox.svg";
import flag from "./images/flag.svg";
import today from "./images/calendar-today.svg";

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

  function deleteList(id) {
    const index = findList(id);
    if (index === -1) return;
    lists.splice(index, 1);
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

  // local storage functions

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
      isComplete: item.isComplete,
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
    const itemPool = new Map();
    let listCounter = 0;
    let img;

    savedLists.forEach((savedList) => {
      if (listCounter === 0) {
        img = inbox;
      } else if (listCounter === 1) {
        img = flag;
      } else if (listCounter === 2) {
        img = today;
      } else {
        img = listIcon;
      }

      listCounter++;

      const listObj = addNewList(savedList.name, savedList.color, img);

      savedList.items.forEach((savedItem) => {
        let itemObj = itemPool.get(savedItem.id);

        if (!itemObj) {
          itemObj = addItem(
            savedItem.name,
            savedItem.date,
            savedItem.desc,
            savedItem.priority,
            savedItem.flagged,
            listObj.getId(),
            savedItem.isComplete
          );
          itemPool.set(savedItem.id, itemObj);
        }

        listObj.addToList(itemObj);
      });
    });
  }

  return {
    getList,
    addNewList,
    getListWithIndex,
    findList,
    getCurrentListId,
    save,
    load,
    deleteList,
  };
}
