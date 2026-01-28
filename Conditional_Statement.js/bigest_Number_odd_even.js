let num = "987654321987654323";

let lastDigit = num[num.length - 1];

if (lastDigit % 2 == 0)
    console.log("Even Number");
else
    console.log("Odd Number");

// output= Odd Number


// function odd even number

function check(num) {

    let lastDigit = num[num.length - 1];

    if (lastDigit % 2 == 0)
        return "Even Number";
    else
        return "Odd Number";
}
let result=check("67543897891");
console.log(result);