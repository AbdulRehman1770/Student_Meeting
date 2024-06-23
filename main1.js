import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
let persons = new Person();
let programStart = async (persons) => {
    while (true) {
        console.log("Welcome");
        let ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with",
            choices: ["staff", "student", "Exit"]
        });
        if (ans.select === "staff") {
            console.log("You approach the staff room. Please feel free to ask any question...");
        }
        else if (ans.select === "student") {
            let studentAns = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student name you wish to engage with"
            });
            let student = persons.students.find(val => val.name === studentAns.student);
            if (!student) {
                let name = new Student(studentAns.student);
                persons.addStudent(name);
                console.log(`Hello, I am ${name.name}. Nice to meet you!`);
                console.log("New Student Added");
            }
            else {
                console.log(`Hello, I am ${student.name}. Nice to see you!`);
            }
            console.log("Current Students List");
            console.log(persons.students.map(student => student.name));
        }
        else if (ans.select === "Exit") {
            console.log("Exiting the Program");
            process.exit();
        }
    }
};
programStart(persons);
