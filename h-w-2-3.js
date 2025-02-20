const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 4500
    },
    {
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
    },
    {
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
    },
    {
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
    },
    
    ];

let arrScore = []


//вывод значения

// let obj1 = { a: 1, b: 2, c: 3 }

// function forFn(obj1) {
//     for(elementKey in obj1) {
// console.log(obj[elementKey])
// }}

for(index in players) {
    console.log(players[index] .scorePoints)
    arrScore.push(players[index] .scorePoints)
}

