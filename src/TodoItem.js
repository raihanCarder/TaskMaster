export default function addItem(nameParam, dateParam, descParam = "", priorityParam, flagged, list) {
    const id = crypto.randomUUID();
    const isComplete = false;

    let name = nameParam;
    let desc = descParam;
    let priority = priorityParam;
    let date = dateParam;

    function getId() {
        return id;
    }

    function setName(newName) {
        name = newName;
    }

    function getName() {
        return name;
    }

    function getDesc() {
        return desc;
    }

    function setDesc(newInfo) {
        desc = newInfo;
    }

    function getPriority() {
        return priority;
    }

    function setPriority(newInfo) {
        priority = newInfo;
    }

    function getList() {
        return list;
    }

    function getDate() {
        return date;
    }

    function setDate(newInfo) {
        date = newInfo;
    }

    return { getName, setName, getDate, setDate, getDesc, setDesc, getPriority, setPriority, flagged, getList, getId, isComplete }
}