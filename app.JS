let cheese = 0;
let knife = 0;
let drill = 0;
let mousetronaut = 0;
let ss = 0;
let clickUpgrades = [
    {
        name: 'knife'
        price: 50,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'drill'
        price: 250,
        quantity: 0,
        multiplier: 5
    }
];
let automaticUpgrades = [
    {
        name: 'mousetronaut'
        price: 1000,
        quantity: 0,
        multiplier: 10
    },
    {
        name: 'ss'
        price: 50000,
        quantity: 0,
        multiplier: 100 
    }
]

function mine() {
    cheese = cheese += 1
    console.log("cheese", cheese)
    drawUserCheese()
}

// button click functions
function buyKnife() {

}
function buyDrill() {
    
}
function buyMousetronaut() {

}
function buySS() {

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

