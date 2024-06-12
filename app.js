import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "quiestion_1",
        type: "list",
        message: "Q1_What is the correct way to check if two values are not equal in TypeScript?",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "quiestion_2",
        type: "list",
        message: "Q2_Which of the following characters is commonly allowed in variable names in TypeScript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "quiestion_3",
        type: "list",
        message: "Q3_Which operator is commonly used for string concatenation in TypeScript?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "quiestion_4",
        type: "list",
        message: "Q4_In Typescript, which symbol is commonly used to terminate a statement?",
        choices: [".", ":", ";", ","]
    },
    {
        name: "quiestion_5",
        type: "list",
        message: "Q5_Which method of inquirer.js is used to start the prompt interface and and receive your input?",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.quiestion_1) {
    case "a !== b":
        console.log("1. correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.quiestion_2) {
    case "$":
        console.log("2. correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.quiestion_3) {
    case "+":
        console.log("3. correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.quiestion_4) {
    case ";":
        console.log("4. correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.quiestion_5) {
    case "prompt()":
        console.log("5. correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(`score : ${score}`);
