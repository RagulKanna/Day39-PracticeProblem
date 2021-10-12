let randomnumberArray = new Array();
for (var i = 0; i < 10; i++) {
    randomnumberArray[i] = Math.floor(Math.random() * 899) + 100;
}
console.log(randomnumberArray);
let maximum = Math.max.apply(Math, randomnumberArray);
console.log(maximum);

