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
    itemsDiv.classList.add("all-items-div")

    for (let num in items) {
        const item = items[num];

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.id = `item-${item.getId()}`;

        const completeBtn = document.createElement("button");
        completeBtn.classList.add("todo-btn");

        const itemName = document.createElement("p");
        itemName.textContent = item.getName();
        itemName.classList.add("item-name-p");
        itemName.id = `name-${item.getId()}`


        itemDiv.appendChild(completeBtn);
        itemDiv.appendChild(itemName);
        itemsDiv.appendChild(itemDiv);

        if (item.isComplete) {
            completeBtn.style.backgroundColor = list.getColor();
            itemName.style.textDecoration = "line-through";
        }

        completeBtn.addEventListener("click", (e) => completeBtnClick(item, e, list.getColor()));
    }

    content.appendChild(itemsDiv)

}

function completeBtnClick(item, e, color) {
    const completeBtn = e.target;

    const getText = document.getElementById(`name-${item.getId()}`)

    if (item.isComplete) {
        completeBtn.style.backgroundColor = "inherit";
        getText.style.textDecoration = "none";
        item.isComplete = false;
    }
    else {
        completeBtn.style.backgroundColor = color;
        getText.style.textDecoration = "line-through";
        item.isComplete = true;
    }
}