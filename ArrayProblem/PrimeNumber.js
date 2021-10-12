let randomnumberArray = new Array();
let factornumbers = new Array();
for (var i = 0; i < 10; i++) {
    randomnumberArray[i] = Math.floor(Math.random() * 899) + 100;
    console.log(randomnumberArray[i]);
}
primenumber();
function primenumber() {
    for (var j = 0; j < randomnumberArray.length; j++) {
        let number = randomnumberArray[j];
        let factors = new Array();
        for (var i = 2; i <= randomnumberArray[j]; i++) {
            while (number % i == 0) {
                factors.push(i);
                number = number / i;
            }
        }
        if (number < 1) console.log(number);
        factornumbers.push(factors);
    }
}

factornumbers.forEach((values, index = 0) => {
    console.log(" the number is " + randomnumberArray[index] + " and the factors is " + values);
    index++;
});