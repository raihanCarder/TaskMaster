import inboxIcon from "./images/inbox.svg";
import todayIcon from "./images/calendar-today.svg";
import flagIcon from "./images/flag.svg";
import circlePlusIcon from "./images/plus-circle.svg"
import plusIcon from "./images/plus.svg";

export default function initPage() {
    _initDashTop();
    _initDashListUI();
    _initDashBottom();
    _initAboveContent();
}

function _initDashTop() {
    const dashTop = document.getElementById("dashboard-top");

    // All btn

    const allBtn = document.createElement("button");
    allBtn.classList.add("nav-btn");
    allBtn.id = "all-btn";

    const circleAllBtn = document.createElement("div");
    circleAllBtn.classList.add("circle-dashboard-icon-outline");
    circleAllBtn.id = "all-circle-clr";

    const allImg = document.createElement("img");
    allImg.src = inboxIcon;
    allImg.alt = "All inbox";
    allImg.classList.add("icon-main");

    const allBtnText = document.createElement("P");
    allBtnText.textContent = "All";

    circleAllBtn.appendChild(allImg);
    allBtn.appendChild(circleAllBtn);
    allBtn.appendChild(allBtnText);
    dashTop.appendChild(allBtn);

    // Today btn

    const todayBtn = document.createElement("button");
    todayBtn.classList.add("nav-btn");
    todayBtn.id = "today-btn";

    const circleTodayBtn = document.createElement("div");
    circleTodayBtn.classList.add("circle-dashboard-icon-outline");
    circleTodayBtn.id = "today-circle-clr";

    const todayImg = document.createElement("img");
    todayImg.src = todayIcon;
    todayImg.alt = "Today calendar";
    todayImg.classList.add("icon-main");

    const todayText = document.createElement("P");
    todayText.textContent = "Today";

    circleTodayBtn.appendChild(todayImg);
    todayBtn.appendChild(circleTodayBtn);
    todayBtn.appendChild(todayText);
    dashTop.appendChild(todayBtn);

    // Flagged btn

    const flagBtn = document.createElement("button");
    flagBtn.classList.add("nav-btn");
    flagBtn.id = "flagged-btn";

    const circleFlagBtn = document.createElement("div");
    circleFlagBtn.classList.add("circle-dashboard-icon-outline");
    circleFlagBtn.id = "flag-circle-clr";

    const flagImg = document.createElement("img");
    flagImg.src = flagIcon;
    flagImg.alt = "Flag image";
    flagImg.classList.add("icon-main");

    const flagText = document.createElement("P");
    flagText.textContent = "Important";

    circleFlagBtn.appendChild(flagImg);
    flagBtn.appendChild(circleFlagBtn);
    flagBtn.appendChild(flagText);
    dashTop.appendChild(flagBtn);

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
