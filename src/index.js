import "./styles.css";
import addItem from "./TodoItem";
import addList from "./listItem";
import getItemInput from "./TodoInput";
import initPage from "./initPageUI";
import listInput from "./listInput";
import listIcon from "./images/list-icon.svg"

function logicApp() {
    const godList = everyList();
    godList.addNewList("All", "lightblue");
    godList.addNewList("Flagged", "orange");
    godList.addNewList("Today", "lightcoral");

    initPage();
    const addListBtn = document.getElementById("add-list-btn");
    const newListModal = listInput(godList.addNewList);

    addListBtn.addEventListener("click", () => newListModal.show());


}

function everyList() {
    const dashboardList = document.getElementById("dashboard-lists");

    const lists = [];

    function addNewList(name, color = "", image = listIcon) {
        if (color === "") {
            const tempList = addList(name);
            lists.push(tempList);
        }
        else {
            const tempList = addList(name, color, image);
            lists.push(tempList);
        }

        console.log("Pushed to godlist");
        _addToDom(lists[lists.length - 1]);
    }

    function getListOfLists() {
        return lists;
    }

    function _addToDom(obj) {
        const id = obj.getId();
        const newListBtn = document.createElement("button");
        newListBtn.classList.add("new-list-item-btn");
        newListBtn.id = `btn-${id}`;

        const circle = document.createElement("div");
        circle.classList.add("circle-list-icon-outline");
        circle.style.backgroundColor = obj.getColor();

        const img = document.createElement("img");
        img.src = listIcon;
        img.alt = "List icon";
        img.classList.add("icon-main");

        const text = document.createElement("p");
        text.textContent = obj.getName();
        text.classList.add("ellipsis");

        circle.appendChild(img);
        newListBtn.appendChild(circle);
        newListBtn.appendChild(text);
        dashboardList.appendChild(newListBtn);
    }

    return { getListOfLists, addNewList }
}


window.addEventListener("DOMContentLoaded", logicApp);
