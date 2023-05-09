let cheese = 51000;
let knife = 0;
let drill = 0;
let mousetronaut = 0;
let ss = 0;
let clickValue = 1;
let newClickValue = 1
// let NewAutoCollect = 0
drawUserCheese()
drawNewClickValue()

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
    console.log("clickValue", clickValue)
    updateClickValue()
    drawUserCheese()
}

function updateClickValue() {
    let newClickValue = 0
    newclickValue = clickValue+(clickUpgrades[0].quantity*clickUpgrades[0].multiplier)+(clickUpgrades[1].quantity*clickUpgrades[1].multiplier)
    console.log("Click value now:", newclickValue)
    document.getElementById("newClickValue").innerText = newclickValue
}

function autoCollect() {
    cheese += automaticUpgrades[0].quantity*automaticUpgrades[0].multiplier,
    cheese += automaticUpgrades[1].quantity*automaticUpgrades[1].multiplier
    console.log("cheese", cheese)
    drawUserCheese()
}
setInterval(autoCollect, 3000)

function updateAutoCollect() {
    let newAutoCollect = 0
    // newAutoCollect = autoCollect+(automaticUpgrades[0].quantity*automaticUpgrades[0].multiplier)+(automaticUpgrades[1].quantity*automaticUpgrades[1].multiplier)
    console.log("Auto Collect now:", newAutoCollect)
    document.getElementById("newAutoCollect").innerText = drawnewAutoCollect
}



// buy functions
function buyKnife() {
    if (cheese >= 50) {
        cheese -= 50
        clickUpgrades[0].quantity += 1,
        // clickUpgrades[0].price = clickUpgrades[0] += 1.5
        console.log("buy knife", clickUpgrades[0].quantity)
        document.getElementById('knife').innerText = clickUpgrades[0].quantity
        drawUserCheese()
        updateClickValue()
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
        updateClickValue()
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
        drawNewAutoCollect()
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
        drawNewAutoCollect()
        // drawButtonSS()
    }
}

// update page functions
function drawAutoMining() {
    document.getElementById("autoCollect").innerText = autoCollect
}
function drawUserCheese() {
    document.getElementById("cheese").innerText = cheese
}
function drawNewClickValue() {
    document.getElementById("newClickValue").innerText = newClickValue
}
function drawNewAutoCollect(){
    document.getElementById("newAutoCollect").innerText = newAutoCollect
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