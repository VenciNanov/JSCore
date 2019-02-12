function solve() {
    let buttons = document.querySelectorAll("button");

    let addTruckBtn = buttons[0];
    let addNewTireSetBtn = buttons[1];
    let goToWorkBtn = buttons[2];
    let endOfShiftBtn = buttons[3];

    addTruckBtn.addEventListener("click", addTruck);
    addNewTireSetBtn.addEventListener("click", addBackUpTires);
    goToWorkBtn.addEventListener("click", goToWork);
    endOfShiftBtn.addEventListener("click", endShift);

    let backUpTireSets = document.querySelectorAll('#exercise section')[1].querySelectorAll('fieldset > div')[0];
    let trucksResult = document.querySelectorAll('#exercise section')[1].querySelectorAll('fieldset div')[1];
    let textAreaResult = document.querySelector('#exercise section textarea');

    let tires = [];
    let trucks = [];

    function addTruck() {
        let inputPlateNumber = document.getElementById("newTruckPlateNumber").value;
        let inputTireCondition = document.getElementById("newTruckTiresCondition").value.split(" ").map(Number);

        let truck = {
            plateNumber: inputPlateNumber,
            tiresCondition: inputTireCondition,
            distance: 0
        };
        appendTruck(truck);
        trucks.push(truck);
    }

    function addBackUpTires() {
        let inputTires = document.getElementById("newTiresCondition").value.split(" ").map(Number);

        appendTires(inputTires);
        tires.push(inputTires)
    }

    function goToWork() {
        let plateNumberInput = document.getElementById("workPlateNumber").value;
        let distance = Number(document.getElementById("distance").value);

        if (!trucks.some(x => x.plateNumber === plateNumberInput)) {
            return;
        }

        let truck = trucks.find(x => x.plateNumber === plateNumberInput);
        if (Math.min(...truck.tiresCondition) * 1000 < distance) {
            changeTires(truck);
        }
         if (Math.min(...truck.tiresCondition) * 1000 >= distance) {
            truck.distance += distance;
            truck.tiresCondition = truck.tiresCondition.map(x => x - distance / 1000)
        }

    }

    function endShift() {
        trucks.forEach(x => {
            textAreaResult.value += `Truck ${x.plateNumber} has traveled ${x.distance}.\n`;
        })
        textAreaResult.value += `You have ${tires.length} sets of tires left.\n`;
    }

    function changeTires(truck) {
        if (tires.length > 0) {
            truck.tiresCondition = tires.shift();
            return true;
        }

        return false;
    }
    function appendTires(tires) {
        let div = document.createElement("div");
        div.classList.add("tireSet");
        div.textContent = tires.join(" ");

        backUpTireSets.appendChild(div);
    }
    function appendTruck(truck) {
        let div = document.createElement("div");
        div.classList.add("truck");
        div.textContent = truck.plateNumber.toString();
        trucksResult.appendChild(div);
    }
}