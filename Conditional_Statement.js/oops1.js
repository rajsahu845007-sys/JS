// object 01

const nsti={trade1:"csa", trade2:"fitter", trade3:"eletrician", trade4:"welder", trade5:"carpenter",}
console.log(nsti);
/* output= {
  trade1: 'csa',
  trade2: 'fitter',
  trade3: 'eletrician',
  trade4: 'welder',
  trade5: 'carpenter'}
*/

// Example 02
const person={name:"rajkumar", age:"20", mobile:"8450075241", Email:"rkraj@gamil.com"}
 console.log("01 output =",person);
 console.log("02 output =",person.name);
 console.log("03 output =",person.name,person.age);
 /* 01 output= {
  name: 'rajkumar',
  age: '20',
  mobile: '8450075241',
  Email: 'rkraj@gamil.com'
}  
  02 output= rajkumar
  03 output= rajkumar 20
*/ 



// class 
class person1{constructor(name,age){
         this.name=name;
         this.age=age;
}
}
const A=new person1("dinesh","23");

console.log(A);

// output= person1 { name: 'dinesh', age: '23' } 



// inheritance 

class animal{constructor(name){
    this.name=name;
}
}
class dog extends animal{constructor(name,last_name){
    super(name);
    this.last_name=last_name;
}
}
 const B=new dog("rajkumar","sahu");

 console.log(B); 
                    
 // output= dog { name: 'rajkumar', last_name: 'sahu' }



// inheritance 
class raj{constructor(roll){
    this.roll=roll;
}
}
class dinesh extends raj{constructor(roll,mobile){
    super(roll);
    this.mobile=mobile;
}
}
class radha extends dinesh{constructor(roll,mobile,address){
    super(roll,mobile);
    this.address=address;
}}
 const C=new radha("1406","8450075241", "Chhattisgarh");

 console.log(C);