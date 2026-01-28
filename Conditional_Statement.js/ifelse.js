// ifelse statement 

let age=45;
if(age>=18)
{
    console.log("you are eligibility");
}
else
{
    console.log("you are Not eligibility");
}

// output= you are eligibility 



// else if //
let percentage=100;
if(percentage>=60)
{
    console.log("first division");
}
else if(percentage>=50)
{
    console.log("Second division"); 
} 
else if(percentage>=33)
{
    console.log("Third division"); 
} 
else
{
 console.log("Fail");    
}

// output= first division 


//  conditional Statement Nested // 

 let marks=100;
 if(marks>=90)
 {
console.log("Grade A");
if(marks>=80)
{
console.log("Grade B");
}
 }
 else if(marks>=70)
 {
  console.log("Grade C");
 }
 else if(marks>=60)
 {
  console.log("Grade D")

 }
else
{
 console.log("Fail")
}

// Ternary Operator //

let a=5;
let b=10;
console.log(a>=b?"A Greter Then":a<=b?"B is Greter Then a":"a and b are equal");

                                                                     