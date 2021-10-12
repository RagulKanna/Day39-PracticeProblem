const REACH_VALUE = 10;
let overall_Count = 0;
let diceMap = new Map();
diceMap.set(1, 0);
diceMap.set(2, 0);
diceMap.set(3, 0);
diceMap.set(4, 0);
diceMap.set(5, 0);
diceMap.set(6, 0);
while (overall_Count != REACH_VALUE) {
    let Dice_number = Math.floor(Math.random() * 6) + 1;
    if (Dice_number == 1) {
        dicevalue(1);
    }
    else if (Dice_number == 2) {
        dicevalue(2);
    }
    else if (Dice_number == 3) {
        dicevalue(3);
    }
    else if (Dice_number == 4) {
        dicevalue(4);
    }
    else if (Dice_number == 5) {
        dicevalue(5);
    }
    else if (Dice_number == 6) {
        dicevalue(6);
    }
}

let minimum_value = Infinity;
let maximum_value = 10;
let minimum_Key = 0;
let maximum_Key = 0;
for (let [key, value] of diceMap) {
    if (value == maximum_value)
        maximum_Key = key;
    else if (value < minimum_value) {
        minimum_value = value;
        minimum_Key = key;
    }
    console.log("key : " + key + " = value : " + value);
};
console.log("Maximum times got number is " + maximum_Key + " for 10 times and the minimum times got number is " + minimum_Key + " for " + minimum_value + " times");


function dicevalue(number) {
    let each_Count = diceMap.get(number) + 1;
    diceMap.set(number, each_Count);
    if (diceMap.get(number) == 10) {
        overall_Count = 10;
    }
}
