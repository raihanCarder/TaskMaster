export default function editModal(submitFunc) {
    const modal = document.getElementById("edit-item-modal");
    const form = document.getElementById("edit-item-form");
    const inputListSelection = document.getElementById("edit-input-item-list");
    const flagBtn = document.getElementById("edit-flag-btn");
    const cancelBtn = document.getElementById("edit-modal-cancel-item-btn");

    const nameInput = document.getElementById("edit-input-item-name");
    const dateInput = document.getElementById("edit-input-item-date");
    const descInput = document.getElementById("edit-input-item-desc");
    const priorityInput = document.getElementById("edit-input-item-priority");
    const listInput = document.getElementById("edit-input-item-list");

    let isFlagged = false;

    const show = () => modal.showModal();
    const close = () => modal.close();
    flagBtn.addEventListener("click", _flagClicked);
    cancelBtn.addEventListener("click", _cancelClick);

    form.addEventListener("submit", (e) => _submitInfo(e));

    _preventsEsc(modal);

    function _preventsEsc(dialogEl) {
        dialogEl.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                e.preventDefault();
            }
        });
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

        submitFunc(nameInput.value, dateInput.value, descInput.value, priorityInput.value, isFlagged);

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

    function fillModal(item) {
        nameInput.value = item.getName();
        dateInput.value = item.getDate();
        descInput.value = item.getDesc();
        priorityInput.value = item.getPriority();
        listInput.value = item.getList();

        if (item.flagged) {
            flagBtn.classList.add("flag-true");
            flagBtn.classList.remove("flag-false");
        }
        else {
            flagBtn.classList.add("flag-false");
            flagBtn.classList.remove("flag-true");

        }

    }

    return { show, addLists, fillModal }
}