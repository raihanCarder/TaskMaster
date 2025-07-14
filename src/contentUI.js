import { format } from 'date-fns';

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

    addTasksToDom(currObj, lists, content);
}

function addTasksToDom(list, allLists, content) {
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
        itemName.classList.add("item-text-styling");
        itemName.id = `name-${item.getId()}`

        const itemDate = document.createElement("p");
        itemDate.textContent = item.getDate();
        itemDate.classList.add("item-text-styling");

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete-btn");
        deleteBtn.id = `del-btn-${item.getId()}`;
        deleteBtn.type = "button";

        itemDiv.appendChild(completeBtn);
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemDate);
        itemDiv.appendChild(deleteBtn);
        itemsDiv.appendChild(itemDiv);

        if (item.isComplete) {
            completeBtn.style.backgroundColor = list.getColor();
            itemName.style.textDecoration = "line-through";
        }

        completeBtn.addEventListener("click", (e) => completeBtnClick(item, e, list.getColor()));
        deleteBtn.addEventListener("click", (e) => deleteBtnClick(e, item, list, allLists));
    }

    content.appendChild(itemsDiv)

}

function deleteBtnClick(e, item, currList, allList) {
    // Curr list is list on display

    const id = e.target.id.substring(8);
    const targetDiv = document.getElementById(`item-${id}`);
    const listAmountText = document.getElementById("number-items-p");
    const today = format(new Date(), 'yyyy-MM-dd');

    const itemListId = item.getList();
    const index = allList.findIndex((list) => list.getId() === itemListId);
    const itemList = allList[index];

    // testing
    console.log("ALL List length: " + allList[0].getLength());
    console.log("Flag List length: " + allList[1].getLength());
    console.log("Today List length: " + allList[2].getLength());
    console.log("List: " + itemList.getName() + " Item List length: " + itemList.getLength());

    // remove item from all
    allList[0].removeFromList(item);

    // remove item from flagged if flagged
    if (item.flagged) {
        allList[1].removeFromList(item);
    }

    // remove item from today if today
    if (item.getDate() === today) {
        allList[2].removeFromList(item);
    }

    //remove item from list if not in default lists 

    if (itemList.getName() !== ("All" || "Today" || "Flagged")) {
        itemList.removeFromList(item);
    }

    targetDiv.remove();
    listAmountText.textContent = currList.getLength();

    // testing
    console.log("ALL List length After: " + allList[0].getLength());
    console.log("Flag List length After: " + allList[1].getLength());
    console.log("Today List length After: " + allList[2].getLength());
    console.log("List: " + itemList.getName() + " Item List length After: " + itemList.getLength());

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