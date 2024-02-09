import * as modal from "./modal.js";
import taskFormView from "./view/taskFormView.js";
import tasksView from "./view/taskView.js";

const controlTaskForm = function (newtask) {
    modal.addNewTask(newtask);

    tasksView.render(modal.state.tasks)
};

const controlTasks = function () {
    tasksView.render(modal.state.tasks)
}


const init = function () {
    taskFormView.addHanler(controlTaskForm);
    tasksView.addHandlerRender(controlTasks)
};
init();