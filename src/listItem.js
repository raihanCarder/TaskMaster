import getRandomColor from "./randomColor";

export default function addList(inputName, inputColor = getRandomColor()) {
    const items = [];
    const name = inputName;
    const color = inputColor;

    function getName() {
        return name;
    }

    function getColor() {
        return color;
    }

    function addToList(item) {
        items.push(item);
    }

    function removeFromList(item) {
        const id = item.id;
        const index = items.findIndex((item) => item.id === id);
        if (index !== -1) {
            items.splice(index, 1);
        }
        else {
            console.log("Error index of item not found, cannot remove");
        }
    }

    function listLength() {
        return items.length;
    }

    return { getName, getColor, addToList, removeFromList, listLength }
}