class TasksView {
    _parentEl = document.getElementById("tasks");
    _data;

    addHandlerRender(hanler) {
        window.addEventListener("load", hanler);
    };

    render(data) {
        if (!Array.isArray(data)) return;
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentEl.insertAdjacentHTML("beforeend", markup);
    };

    _generateMarkup() {
        if (!this._data.length) return `<div class="data-not-found">No task found</div>`;
        else return this._data.map(this._generateMarkupPrivew).join("");
    };

    _generateMarkupPrivew(task) {
        return `
        <div class="task card">
            <div class=" w-full mr-2">
                <input class="card-input" type="text" value="${task.task}">

            </div>
            <div class="actions flex my-0 mx-[-0.5rem]">
                <button class="primary-button" class="edit">Edit</button>
                <button class="button text-crimson" class="delet">Delete</button>
            </div>
        </div>`;
    };

    _clear() {
        this._parentEl.innerHTML = "";
    }
}

export default new TasksView();