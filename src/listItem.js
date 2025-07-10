export default function addList(name) {
    const items = [];

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

    return { name, addToList, removeFromList, listLength }
}