let cheese = 500000;
let knife = 0;
let drill = 0;
let mousetronaut = 0;
let ss = 0;
let clickValue = 1;

let clickUpgrades = [
    {
        name: 'knife',
        price: 50,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'drill',
        price: 250,
        quantity: 0,
        multiplier: 5
    }
];
let automaticUpgrades = [
    {
        name: 'mousetronaut',
        price: 1000,
        quantity: 0,
        multiplier: 10
    },
    {
        name: 'ss',
        price: 50000,
        quantity: 0,
        multiplier: 100
    }
];
// for each loop before each moon click
// cheese += knife.qty*multiplier math function
function mine() {
    cheese += clickUpgrades[0].quantity*clickUpgrades[0].multiplier+1
    cheese += clickUpgrades[1].quantity*clickUpgrades[1].multiplier
    console.log("cheese", cheese)
    drawUserCheese()
}

// buy functions
function buyKnife() {
    if (cheese >= 50) {
        cheese -= 50
        clickUpgrades[0].quantity += 1
        console.log("buy knife", clickUpgrades[0].quantity)
        document.getElementById('knife').innerText = clickUpgrades[0].quantity
        drawUserCheese()
        // drawButtonKnife()
    }
}
function buyDrill() {
    if (cheese >= 250) {
        cheese -= 250
        clickUpgrades[1].quantity += 1
        console.log("buy Drill", clickUpgrades[1].quantity)
        document.getElementById('drill').innerText = clickUpgrades[1].quantity
        drawUserCheese()
        // drawButtonDrill()
    }
}
function buyMousetronaut() {
    if (cheese >= 1000) {
        cheese -= 1000
        automaticUpgrades[0].quantity += 1
        console.log("buy Mousetronaut", automaticUpgrades[0].quantity)
        document.getElementById('mousetronaut').innerText = automaticUpgrades[0].quantity
        drawUserCheese()
        // drawButtonMousetronaut()
    }
}
function buySS() {
    if (cheese >= 50000) {
        cheese -= 50000
        automaticUpgrades[1].quantity += 1
        console.log("buy SS", automaticUpgrades[1].quantity)
        document.getElementById("ss").innerText = automaticUpgrades[1].quantity
        drawUserCheese()
        // drawButtonSS()
    }
}

function currentClickValue() {
    clickValue += clickUpgrades[0].quantity*clickUpgrades[0].multiplier+1
    clickValue += clickUpgrades[1].quantity*clickUpgrades[1].multiplier
    console.log("current click value", clickValue)
    document.getElementById('clickValue').innerText = clickValue
    drawclickValue()
}

// update page functions
function drawUserCheese() {
    document.getElementById("cheese").innerText = cheese
}
function drawButtonKnife() {
    document.getElementById("knife").innerText = knife
}
function drawButtonDrill() {
    document.getElementById("drill").innerText = drill
}
function drawButtonMousetronaut() {
    document.getElementById("mousetronaut").innerText = mousetronaut
}
function drawButtonSS() {
    document.getElementById("ss").innerText = ss
}