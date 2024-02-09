class TaskFormView {
    _parentEl = document.getElementById("new-task-form");
    _errorMsg = 'Please fill the input';

    addHanler(hanler) {
        this._parentEl.addEventListener("submit", (e) => {
            e.preventDefault();
            const newTask = this._parentEl.querySelector('input').value;
            if (newTask) hanler(newTask);
            else this._displayError()
        })
    }

    _displayError(error = this._errorMsg) {
        alert(error);
    }
};


export default new TaskFormView();