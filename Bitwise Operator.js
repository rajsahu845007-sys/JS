// AND Operator 
let A=5;  // 0101
let B=3;  // 0011        
console.log("Number is a AND =",A&B);
/* output= Number is a AND =1, 
               (BINARY=0001) */


//  OR Operator
let n=5; // 0101
let m=3; // 0011
console.log("Number is a OR =",n|m);
/* output=Number is a OR =7           
           (BINARY=0111) */

// XOR operator 
let b=5; // 0101
let c=8; // 1000
console.log("Number is a XOR =",b^c);
/* output=Number is a XOR =13       
           (BINARY=1101) */

// NOT Operator      
let x=5; // 0101 
console.log("Number is a =",~x);
// output= -6  

let t=-5; // 0101
console.log("Number is a =",~t);
// output= 4  

let o=-0; // 0101
console.log("Number is a =",~o);
// output= 4  

// Bitwise Left shift 
  let X=5<<1;
  console.log(X);
// output=10  //

let E=5<<2;
  console.log(E);
// output=10  

// Bitwise Right shift 

let j=5>>1;
console.log(j);
// output= 2  

let d=5>>2;
console.log(d);
// output= 1


// Unsigned Sign //
let C=-8>>>1;
console.log(C);
// output= 2147483644

