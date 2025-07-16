export default function addItem(nameParam, dateParam, descParam = "", priorityParam, flagged, listParam, isCompleteParam = false) {
    const id = crypto.randomUUID();

    let name = nameParam;
    let desc = descParam;
    let priority = priorityParam;
    let date = dateParam;
    let list = listParam;
    let isComplete = isCompleteParam;

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

    function setList(newInfo) {
        list = newInfo
    }

    function getDate() {
        return date;
    }

    function setDate(newInfo) {
        date = newInfo;
    }

    function getFlagged() {
        return flagged;
    }

    return { getName, setName, getDate, setDate, getDesc, setDesc, getPriority, setPriority, flagged, getList, getId, isComplete, getFlagged, setList }
}