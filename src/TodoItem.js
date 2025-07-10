export default function addItem(name, date, note = "", priority, flagged, list) {
    const id = crypto.randomUUID();
    const isComplete = false;
    return { name, date, note, priority, flagged, list, id, isComplete }
}