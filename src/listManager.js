import addList from "./listItem";

import listIcon from "./images/list-icon.svg"

export default function createListManager() {
    const dashboardList = document.getElementById("dashboard-lists");
    const content = document.getElementById("content");

    const lists = [];

    function addNewList(name, color = "", image = listIcon) {

        const tempList = color === "" ? addList(name) : addList(name, color);
        lists.push(tempList);

        // TESTING
        console.log(lists.map((list) => list.getName()));

        _addToDom(lists[lists.length - 1], image);
    }

    function getList() {
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
        divTitle.style.borderBottom = `1px solid ${currObj.getColor()}`;

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

    return { getList, addNewList }
}
