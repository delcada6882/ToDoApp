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
const inputForButton = document.getElementById('inputForButton')
let list = []

function addToList() {
    let inpVal = inputForButton.value
    list.push(inpVal);

    displayList();
}

function displayList() {
    const lisDis = document.getElementById('list')
    lisDis.innerHTML = ""
    console.log(list)
    for (const i of list) {
        lisDis.innerHTML += `<li>${i}</li>`
    }
}
