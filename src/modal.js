import { TASK_PER_PAGE } from "./config";

export const state = {
    tasks: [],
    taskPerPage: TASK_PER_PAGE,
    curPage: 1,
    editTaskIndex: 0,
};

export const addNewTask = function (newTask) {
    const today = new Date();
    const date = new Intl.DateTimeFormat("en-india", { dateStyle: 'medium' });

    const task = {
        task: newTask,
        created: date.format(today),
    };
    state.tasks.push(task);
    persistTask();
}

export const deleteTask = function (deleteTask) {
    const index = state.tasks.findIndex(task => task.task === deleteTask);
    state.tasks.splice(index, 1);
    persistTask();
}

export const editTask = function (editTask) {
    state.editTaskIndex = state.tasks.findIndex(task => task.task === editTask);
}

export const saveEditTask = function (saveEditTask) {
    state.tasks[state.editTaskIndex].task = saveEditTask;
    persistTask();
}

const persistTask = function () {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
}

export const getTaskPerPage = function (page = state.curPage) {
    state.curPage = page;
    const start = (page - 1) * state.taskPerPage;
    const end = page * state.taskPerPage;
    if (state.tasks.length <= state.taskPerPage) {
        state.curPage = 1
        return state.tasks
    }
    else return state.tasks.slice(start, end);
}

const init = function () {
    const saveTasks = JSON.parse(localStorage.getItem("tasks"));
    if (saveTasks) state.tasks = saveTasks;
};
init();