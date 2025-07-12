export default function listInput(submitFunc) {
    const modal = document.getElementById("add-list-modal");
    const form = document.getElementById("add-list-form");
    const listName = document.getElementById("list-name-input");
    const closeBtn = document.getElementById("add-list-close-btn");

    const show = () => modal.showModal();
    const close = () => modal.close();

    _preventsEsc(modal);

    function _preventsEsc(dialogEl) {
        dialogEl.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                e.preventDefault();
            }
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        submitFunc(listName.value);
        close();
        form.reset();
    });
    closeBtn.addEventListener("click", close);

    return { show };
}