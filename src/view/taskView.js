import view from "./view";

class TasksView extends view {
    _parentEl = document.getElementById("tasks");

    constructor() {
        super();
        document.addEventListener("click", (e) => {
            if (e.target.closest(".task")) return;
            this._setAllEditBtnNormal();
        })
    }

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

    addHandlerRenderEdit(handler1, handler2) {
        this._parentEl.addEventListener("click", (e) => {
            const btn = e.target.closest(".edit-save");
            if (!btn) return;

            if (btn.textContent.toLowerCase("") === 'edit') {
                this._setAllEditBtnNormal();

                btn.textContent = "save";
                const input = btn.closest(".task").querySelector("input");
                const end = input.value.length;
                input.removeAttribute("readonly")
                input.setSelectionRange(end, end);
                input.focus();
                handler1(input.value);
            } else if (btn.textContent.toLowerCase("") === 'save') {
                this._setAllEditBtnNormal();

                btn.textContent = "edit";
                const input = btn.closest(".task").querySelector("input");
                input.setAttribute("readonly", "readonly")
                handler2(input.value);
            };
        })
    }

    _setAllEditBtnNormal() {
        const allBtn = this._parentEl.querySelectorAll(".edit-save");
        allBtn.forEach(btn => {
            if (btn.textContent.toLocaleLowerCase() === "save") {
                btn.textContent = "edit";
                const input = btn.closest(".task").querySelector("input");
                input.setAttribute("readonly", "readonly");
            }
        })
    }

    _generateMarkup() {
        if (this._data.length === 0) return `<div class="data-not-found">No task found</div>`;
        else return this._data.map(this._generateMarkupPrivew).join("");
    };

    _generateMarkupPrivew(task) {
        return `
        <div class="task card">
            <div class="col-span-2">
                <input class="card-input" type="text" value="${task.task}" readonly spellcheck="false">
            </div>
            <div>${task.created}</div>
            <div class="actions flex my-0 mx-[-0.5rem]">
                <button class="primary-button edit-save edit">Edit</button>
                <button class="button text-crimson delete" class="delet">Delete</button>
            </div>
        </div>`;
    };
}

export default new TasksView();