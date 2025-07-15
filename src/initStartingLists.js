import inboxIcon from "./images/inbox.svg";
import todayIcon from "./images/calendar-today.svg";
import flagIcon from "./images/flag.svg";

export default function initStartingLists(lists) {
    lists.addNewList("All", "lightblue", inboxIcon);
    lists.addNewList("Flagged", "orange", flagIcon);
    lists.addNewList("Today", "lightcoral", todayIcon);
}