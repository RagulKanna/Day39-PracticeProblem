let randomnumberArray = new Array();
let sortedArray = new Array();
for (var i = 0; i < 10; i++) {
    randomnumberArray[i] = Math.floor(Math.random() * 899) + 100;
}
sortedArray = randomnumberArray.sort();
console.log(sortedArray);
var maximum = Math.max.apply(null, sortedArray);
console.log(maximum);
var minimum = Math.min.apply(null, sortedArray);
console.log(minimum);
sortedArray.splice(sortedArray.indexOf(maximum), 1);
sortedArray.splice(sortedArray.indexOf(minimum), 1);
console.log("The second_Largest is " + Math.max.apply(null, sortedArray));
console.log("The second_Smallest is " + Math.min.apply(null, sortedArray));