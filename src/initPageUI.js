import circlePlusIcon from "./images/plus-circle.svg"
import plusIcon from "./images/plus.svg";

export default function initPage(modal) {
    _initDashListUI();
    _initDashBottom();
    _initAboveContent();

}

function _initDashListUI() {
    const dashboardList = document.getElementById("dashboard-lists");
    const listP = document.createElement("p");
    listP.textContent = "My Lists:";

    dashboardList.appendChild(listP);
}

function _initDashBottom() {
    const dashboardBottom = document.getElementById("dashboard-bottom");

    const btn = document.createElement("button");
    btn.id = "add-list-btn";

    const btnImg = document.createElement("img");
    btnImg.src = circlePlusIcon;
    btnImg.alt = "Circle plus";
    btnImg.id = "add-list-btn-img";

    const btnText = document.createElement("p");
    btnText.textContent = "Add List";

    btn.appendChild(btnImg);
    btn.appendChild(btnText);
    dashboardBottom.appendChild(btn);
}

function _initAboveContent() {
    const aboveContent = document.getElementById("above-content");

    const title = document.createElement("h1");
    title.textContent = "TaskMaster";

    const btn = document.createElement("button");
    btn.id = "add-item-btn";

    const img = document.createElement("img");
    img.src = plusIcon;
    img.alt = "Add item";

    btn.appendChild(img);

    aboveContent.appendChild(title);
    aboveContent.appendChild(btn);
}
