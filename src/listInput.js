export default function listInput(submitFunc) {
    const modal = document.getElementById("add-list-modal");
    const form = document.getElementById("add-list-form");
    const listName = document.getElementById("list-name-input");

    const show = () => modal.showModal();
    const close = () => modal.close();

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        submitFunc(listName.value);
        close();
        form.reset();
    });

    return { show };
}