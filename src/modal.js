export const state = {
    tasks: [],
};

export const addNewTask = function (newTask) {
    const today = new Date();
    const date = new Intl.DateTimeFormat("en-india", { dateStyle: 'medium' });

    const task = {
        task: newTask,
        created: date.format(today),
    };
    state.tasks.push(task);
}