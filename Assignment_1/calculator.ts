import inquirer from 'inquirer';
import chalk from 'chalk';
var questions = [{
        name: 'number1',
        type: 'number',
        message: "enter number 1"
    },
    {
        name: 'number2',
        type: 'number',
        message: "enter number 2"
    },
    {
        name: 'operation',
        type: 'list',
        message: "choose an operation",
        choices: ["+", "-", "*", "/", "%", "ADDITION", "PLUS", "SUBTACTION", "MINUS", "MULTIPLICATION", "DIVISION", "REMAINDER"]
    }];
var answers = inquirer.prompt(questions);
answers.then((answers) => {
    console.log(answers);
    if (answers.operation == "+" || answers.operation == "ADDITION" || answers.operation == "PLUS") {
        console.log(chalk.green(`${answers.number1}+${answers.number2} = ${answers.number1 + answers.number2}`));
    }
    else if (answers.operation == "-" || answers.operation == "SUBTRACTION" || answers.operation == "MINUS") {
        console.log(chalk.yellow(`${answers.number1}-${answers.number2} = ${answers.number1 - answers.number2}`));
    }
    else if (answers.operation == "*" || answers.operation == "MULTIPLICATION") {
        console.log(chalk.blue(`${answers.number1}*${answers.number2} = ${answers.number1 * answers.number2}`));
    }
    else if (answers.operation == "/" || answers.operation == "DIVISION") {
        console.log(chalk.black(`${answers.number1}/${answers.number2} = ${answers.number1 / answers.number2}`));
    }
    else if (answers.operation == "%" || answers.operation == "REMAINDER") {
        console.log(chalk.red(`${answers.number1}%${answers.number2} = ${answers.number1 % answers.number2}`));
    }
})
    .catch((err) => {
})
