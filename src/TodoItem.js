export default function addItem(name, date, desc = "", priority, flagged, list) {
    const id = crypto.randomUUID();
    const isComplete = false;

    function getId() {
        return id;
    }

    function getName() {
        return name;
    }

    function getDesc() {
        return desc;
    }

    function getPriority() {
        return priority;
    }

    function getList() {
        return list;
    }

    function getDate() {
        return date;
    }

    return { getName, getDate, getDesc, getPriority, flagged, getList, getId, isComplete }
}