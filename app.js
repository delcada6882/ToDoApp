// function Car(make, model, year, engine) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.engine = engine;
// }
// function Engine(part1, part2, part3) {
//     this.part1 = part1;
//     this.part2 = part2;
//     this.part3 = part3;
// }

// let v6Turbo = new Engine("Core", "Processing", "Unit");
// let myCar = new Car('nissan', 'GT-R', 2015, v6Turbo);

// console.log(myCar);

const lists = {
    1: {
      name: "Shopping list",
      todos: [
        {
          text: 'bananas',
          completed: false
        },
        {
          text: '1 lbs ground turkey',
          completed: false
        }
      ]
    },
   }
const currentList = lists[0];
   

const inputForButton = document.getElementById('inputForButton')
const listNames = document.getElementById('listNames')
let list = []

function addNewList() {
    let newListHTML = inputForButton.value;
    listNames.innerHTML += `<h2>${newListHTML}</h2>`;
    inputForButton.value = "";
}

function justForShow() {
    console.log("EHY")
}