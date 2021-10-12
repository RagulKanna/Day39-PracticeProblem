let numbers = new Array();
let repeated_values = new Array();
for (var i = 1; i <= 100; i++) {
    numbers.push(i);
}

numbers.forEach((values) => {
    let temp1 = values % 10;
    let temp2 = Math.trunc(values / 10);
    if (temp1 == temp2)
        repeated_values.push(values);
});

repeated_values.forEach((values) => {
    console.log(values);
});

