export default function loadContent(id, lists) {
    // lists is the actual list of lists not the list Manager

    const content = document.getElementById("content");

    content.textContent = "";

    const index = lists.findIndex((list) => list.getId() === id);
    const currObj = lists[index]; // curr list

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
    circleText.id = `number-items-p`;
    circleText.dataset.currList = `${id}`;
    circleText.textContent = currObj.getLength();

    circle.appendChild(circleText);
    divTitle.appendChild(title);
    divTitle.appendChild(circle);
    content.appendChild(divTitle);

    addTasksToDom(currObj, content);
}

function addTasksToDom(list, content) {
    const items = list.getItems();

    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("items-div")

    console.log("creating tasks for dom");

    // for (let item in items) {
    //     // Code to Add Item to DOM
    // }
}