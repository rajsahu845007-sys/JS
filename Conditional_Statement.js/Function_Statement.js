// function Example 01

function add(a,b)
{
    return a+b;
}
console.log(add(2,6));
// output= 8





// function Example 02

function add(a,b)
{
    return a+b;
}
let result=add(5,8);
console.log(result);

// output= 13  


// function Example 02

function check(num)
{
if(num>=33)
{
return "pass";
}
else
{
    return "Fail";
}
}
console.log(check(40));

// output= pass 


// Function odd Even Example 1

function evenOdd(num) {
  if (num % 2 == 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
}

console.log(evenOdd(6)); // Even
console.log(evenOdd(7)); // Odd


// Function odd Even Example 2

function check(num) {

    let lastDigit = num[num.length - 1];

    if (lastDigit % 2 == 0)
        return "Even Number";
    else
        return "Odd Number";
}
let resul=check("67543897891");
console.log(resul);
