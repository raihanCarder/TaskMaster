export default function addItem(name, date, note = "", priority, flagged, list) {
    const id = crypto.randomUUID();
    const isComplete = false;

    function getId() {
        return id;
    }
    return { name, date, note, priority, flagged, list, getId, isComplete }
}