export default function itemModal() {
    const modal = document.getElementById("add-item-modal");
    const form = document.getElementById("add-item-form");
    const nameInput = document.getElementById("input-item-name");
    const inputListSelection = document.getElementById("input-item-list");
    const flagBtn = document.getElementById("flag-btn");
    const cancelBtn = document.getElementById("modal-cancel-item-btn");

    let isFlagged = false;

    const show = () => modal.showModal();
    const close = () => modal.close();

    flagBtn.addEventListener("click", _flagClicked);
    cancelBtn.addEventListener("click", _cancelClick);

    form.addEventListener("submit", (e) => _submitInfo(e));

    function addLists(list) {
        _clearLists();

        // Shouldn't add Today and Flagged lists as they're special cases.

        const filteredList = list.filter((_, index) => index !== 1 && index !== 2);

        for (let num in filteredList) {
            const item = filteredList[num];

            const option = document.createElement("option");
            option.value = item.getId();
            option.textContent = item.getName();

            inputListSelection.appendChild(option);
        }
    }

    function _submitInfo(e) {
        e.preventDefault();

        // Submit to sum function
        // make editing variable that will call submit if not editing and then just edit if editing true
        close();

        if (isFlagged) {
            flagBtn.classList.toggle("flag-false");
            flagBtn.classList.toggle("flag-true");
        }

        isFlagged = false;
        form.reset();
    }

    function _flagClicked() {
        isFlagged = !isFlagged;
        flagBtn.classList.toggle("flag-false");
        flagBtn.classList.toggle("flag-true");
    }

    function _clearLists() {
        inputListSelection.textContent = "";
    }

    function _cancelClick() {
        form.reset();
        close();
    }

    return { show, addLists }
}