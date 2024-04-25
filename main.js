#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("=".repeat(60));
console.log(chalk.bold.bgCyanBright("\n \t Code With Rabia- Word Counter\n\t"));
console.log("=".repeat(60));
let todoList = [];
let conditions = true;
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: " Enter your new task",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n${newTask.task} task added successfully in Todo List`);
};
let viewTask = async () => {
    console.log("\n Your Todo List \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}:${task}`);
    });
};
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete: "
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} This task has been deleted successfully from your Todo List`);
};
let updateTask = async () => {
    await viewTask();
    let updateTaskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: " Enter the 'index no'of the task you want to update",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter New Task Name:",
        }
    ]);
    todoList[updateTaskIndex.index - 1] = updateTaskIndex.new_task;
    console.log(`\n Task at index no. ${updateTaskIndex - 1} updated successfully[For updated list check option: "View Todo List" ]`);
};
main();
