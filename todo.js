import inquirer from "inquirer";
let todo = [];
while (true) {
    let input = await inquirer.prompt([
        { name: "Todo",
            type: "input",
            message: 'add todo' },
        { name: "addmore",
            type: 'list',
            choices: ["yes", "no"] }
    ]);
    const { Todo, addmore } = input;
    todo.push(Todo);
    if (addmore == "no") {
        for (let i = 0; i < todo.length; i++) {
            console.log(todo[i]);
        }
        break;
    }
}
