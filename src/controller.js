import * as modal from "./modal.js";
import taskFormView from "./view/taskFormView.js";
import tasksView from "./view/taskView.js";
import paginationView from "./view/paginationView.js";

const controlTaskForm = function (newtask) {
    modal.addNewTask(newtask);

    controlTasks();
};

const controlTasks = function () {
    tasksView.render(modal.getTaskPerPage());

    paginationView.render(modal.state);
}

const controlPagination = function (page) {
    tasksView.render(modal.getTaskPerPage(page));

    paginationView.render(modal.state)
}

const controlDeleteTask = function (task) {
    modal.deleteTask(task);

    controlTasks();
}

const controlEditTask = function (task) {
    // console.log(task)
    modal.editTask(task);
}

const controlSaveEditTask = function (task) {
    modal.saveEditTask(task);
}

const init = function () {
    taskFormView.addHanler(controlTaskForm);
    tasksView.addHandlerRender(controlTasks)
    paginationView.addHandlerRender(controlPagination);
    tasksView.addHandlerRenderDelete(controlDeleteTask);
    tasksView.addHandlerRenderEdit(controlEditTask, controlSaveEditTask);
    // tasksView.addHandlerRenderSaveEdit(controlSaveEditTask);
};
init();
