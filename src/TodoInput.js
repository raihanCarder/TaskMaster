export default function itemModal(submitFunc, mode = "Add") {
    const modal = document.getElementById("add-item-modal");
    const form = document.getElementById("add-item-form");
    const inputListSelection = document.getElementById("input-item-list");
    const flagBtn = document.getElementById("flag-btn");
    const cancelBtn = document.getElementById("modal-cancel-item-btn");

    const nameInput = document.getElementById("input-item-name");
    const dateInput = document.getElementById("input-item-date");
    const descInput = document.getElementById("input-item-desc");
    const priorityInput = document.getElementById("input-item-priority");
    const listInput = document.getElementById("input-item-list");

    let isFlagged = false;

    const show = () => modal.showModal();
    const close = () => modal.close();

    flagBtn.addEventListener("click", _flagClicked);
    cancelBtn.addEventListener("click", _cancelClick);

    form.addEventListener("submit", (e) => modeSelector(e));

    function modeSelector(e) {
        if (mode === "Add") {
            _submitInfo(e);
        }
        else {
            _changeInfo(e);
        }
    }

    _preventsEsc(modal);

    function _preventsEsc(dialogEl) {
        dialogEl.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                e.preventDefault();
            }
        });
    }

    function _changeInfo(e) {
        submitFunc(nameInput.value, dateInput.value, descInput.value, priorityInput.value, isFlagged, listInput.value);
    }

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

        submitFunc(nameInput.value, dateInput.value, descInput.value, priorityInput.value, isFlagged, listInput.value);

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