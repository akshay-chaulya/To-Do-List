class TaskFormView {
    _parentEl = document.getElementById("new-task-form");
    _input = document.getElementById("new-task-form-input");
    _errorMsg = 'Please fill the input';

    addHanler(hanler) {
        this._parentEl.addEventListener("submit", (e) => {
            e.preventDefault();
            const newTask = this._input.value;
            this._input.value = '';
            if (newTask) hanler(newTask);
            else this._displayError()
        })
    }

    _displayError(error = this._errorMsg) {
        alert(error);
    }
};


export default new TaskFormView();