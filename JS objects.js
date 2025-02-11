let testUser = new Object();

testUser.name = "Oksana";
testUser.age = 37;
testUser.city = "Barcelona";

console.log(testUser);

let someString = "new string";

let testUserLiteral = {
  testUser: "Oksana",
  age: 37,
  city: "Barcelona",
};

console.log(testUserLiteral);

let testUserArrey = new Array("oksana", 37, "barcelona");
console.log(testUserArrey);

function calculateExpenses(food, restaurants, utilites, school) {
  return food + restaurants + utilites + school;
}

function calculateSavings(
  expenses = calculateExpenses(200, 450, 300, 100),
  salary = 5000
) {
  return salary - expenses;
}
console.log(calculateSavings(1500));

let x = 5;
let y = "5";

console.log(x === y);

newFunction();
function newFunction() {
    let buttonStatus = "enabled";

    if (buttonStatus == "enabled") {
        console.log("Execute clickBtn()");
    } else if (buttonStatus == "disabled") {
        console.log("Execute fillForm();");
    } else {
        console.log("Button has another status");
    }

    switch (buttonStatus) {
        case "enabled":
            console.log("Execute clickBtn()");
            break;

        case "disabled":
            console.log("Execute fillForm()");
            break;

        default:
    }
    console.log("Continue...");
}

