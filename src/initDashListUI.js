export default function initDashListUI() {
    const dashboardList = document.getElementById("dashboard-lists");
    const listP = document.createElement("p");
    listP.textContent = "My Lists:";

    dashboardList.appendChild(listP);
}