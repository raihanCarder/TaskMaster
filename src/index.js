import "./styles.css";
import addItem from "./TodoItem";
import addList from "./listItem";
import getItemInput from "./TodoInput";
import initPage from "./initPageUI";
import listInput from "./listInput";
import listIcon from "./images/list-icon.svg"
import inboxIcon from "./images/inbox.svg";
import todayIcon from "./images/calendar-today.svg";
import flagIcon from "./images/flag.svg";

function logicApp() {

    const godList = everyList();
    godList.addNewList("All", "lightblue", inboxIcon);
    godList.addNewList("Flagged", "orange", todayIcon);
    godList.addNewList("Today", "lightcoral", flagIcon);
    initPage();

    const addListBtn = document.getElementById("add-list-btn");
    const newListModal = listInput(godList.addNewList);

    addListBtn.addEventListener("click", () => newListModal.show());


}

function everyList() {
    const dashboardList = document.getElementById("dashboard-lists");
    const content = document.getElementById("content");

    const lists = [];

    function addNewList(name, color = "", image = listIcon) {
        if (color === "") {
            const tempList = addList(name);
            lists.push(tempList);
        }
        else {
            const tempList = addList(name, color);
            lists.push(tempList);
        }

        console.log("Pushed to godlist");
        _addToDom(lists[lists.length - 1], image);
    }

    function getListOfLists() {
        return lists;
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

        newListBtn.addEventListener("click", (e) => loadContent(e));
    }

    function loadContent(e) {
        _clearContent();

        const id = e.currentTarget.id.substring(4);
        const findIndex = lists.findIndex((obj) => id === obj.getId());
        const currObj = lists[findIndex];

        const divTitle = document.createElement("div");
        divTitle.classList.add("content-title-div");

        const title = document.createElement("h3");
        title.id = "topic-title";
        title.textContent = currObj.getName();
        title.style.color = currObj.getColor();

        const circle = document.createElement("div");
        circle.classList.add("circle-content-icon-outline");
        circle.style.backgroundColor = currObj.getColor();

        const circleText = document.createElement("p");
        circleText.classList.add("number-items-p");
        circleText.textContent = currObj.getLength();

        circle.appendChild(circleText);
        divTitle.appendChild(title);
        divTitle.appendChild(circle);
        content.appendChild(divTitle);
    }

    function _clearContent() {
        content.textContent = "";
    }

    return { getListOfLists, addNewList }
}


window.addEventListener("DOMContentLoaded", logicApp);
