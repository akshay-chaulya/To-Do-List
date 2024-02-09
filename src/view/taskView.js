import view from "./view";

class TasksView extends view {
    _parentEl = document.getElementById("tasks");

    addHandlerRender(hanler) {
        window.addEventListener("load", hanler);
    };

    addHandlerRenderDelete(handler) {
        this._parentEl.addEventListener("click", function (e) {
            const btn = e.target.closest(".delete");
            if (!btn) return;
            const task = btn.closest(".card").querySelector(".card-input").value;
            handler(task);
        })
    }

    addHandlerRenderEdit(handler) {
        this._parentEl.addEventListener("click", function (e) {
            const btn = e.target.closest(".edit");
            if (!btn) return;
            const input = btn.closest(".card").querySelector(".card-input");
            input.removeAttribute("readonly");
            const end = input.value.length;
            input.setSelectionRange(end, end);
            input.focus();
            btn.innerHTML = 'save';
            handler(input.value);
        })
    }

    _generateMarkup() {
        if (this._data.length === 0) return `<div class="data-not-found">No task found</div>`;
        else return this._data.map(this._generateMarkupPrivew).join("");
    };

    _generateMarkupPrivew(task) {
        return `
        <div class="task card">
            <div class=" w-full mr-2">
                <input class="card-input" type="text" value="${task.task}" readonly spellcheck="false">

            </div>
            <div class="actions flex my-0 mx-[-0.5rem]">
                <button class="primary-button edit" class="edit">Edit</button>
                <button class="button text-crimson delete" class="delet">Delete</button>
            </div>
        </div>`;
    };
}

export default new TasksView();