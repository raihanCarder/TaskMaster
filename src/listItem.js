import getRandomColor from "./randomColor";

export default function addList(inputName, inputColor = getRandomColor()) {
    const items = [];
    const name = inputName;
    const color = inputColor;
    const id = crypto.randomUUID();

    function getName() {
        return name;
    }

    function getColor() {
        return color;
    }

    function getItems() {
        return items;
    }

    function getId() {
        return id;
    }

    function addToList(item) {
        items.push(item);
    }

    function removeFromList(item) {
        const id = item.getId();
        const index = items.findIndex((item) => item.getId() === id);

        if (index !== -1) {
            items.splice(index, 1);
        }
        else {
            console.log("Error index of item not found, cannot remove");
        }
    }

    function getLength() {
        return items.length;
    }

    return { getName, getColor, getItems, addToList, removeFromList, getLength, getId }
}