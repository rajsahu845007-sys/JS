// OBJECT
const rajkumar={ name:"rajkumar", age:"21", address:"chhattisgarh", mobile:"8450075241"};
console.log(rajkumar);
/* output= {
  name: 'rajkumar',
  age: '21',
  address: 'chhattisgarh',
  mobile: '8450075241'
} */




// CLASS 
class person{constructor(name,age,mobile)
    {
        this.name=name;
        this.age=age;
        this.mobile=mobile;
    }
}
const raj=new person("rajkumar","21","8450075421");

console.log(raj); // person { name: 'rajkumar', age: '21', mobile: '8450075421' }        
console.log(raj.name);   // rajkumar
console.log(raj.name,raj.age);  // rajkumar 21




// Inheritance 

class animal{constructor(name,trade,address,) {
     this.name=name;
     this.trade=trade;
     this.address=address;
}}
class dog extends animal{constructor(name,trade,address,mobile,pin_code){
     super(name,trade,address)
     this.mobile=mobile;
     this.pin_code=pin_code;

}
}

const rajsahu=new dog("rajkumar", "csa", "chhttisgarh", "8450075241", "495691");

console.log(rajsahu);

/* output= dog {
  name: 'rajkumar',
  trade: 'csa',
  address: 'chhttisgarh',
  mobile: '8450075241',
  pin_code: '495691'
}
  */


// Polymorphism 

class animal {
    sound(){
        console.log("Animal sound");
    }
}
  class dog{
    sound(){
        console.log("dog Sound");
        }
  }
class cat{
    sound(){
        console.log("meow meow")
    }
}

let animal1=new animal();
let dog1=new dog();
let cat1=new cat();

animal1.sound(); // Animal sound
dog1.sound(); // dog Sound
cat1.sound(); // meow meow 


// Encapsulation 
class details{
  #name;
  #address;
  constructor(name,address,mobile,aadhar){
   this.#name=name;
   this.#address=address;
   this.mobile=mobile;
   this.aadhar=aadhar;
  }
  get(){
    return `${this.#name},${this.#address}`;
  }
set(a,b){
   this.#name=a;
   this.#address=b;
}
}

const person=new details("dinesh","chhapora","8450075241","814366398810");
console.log(person);            
console.log(person.get()); 
 person.set("rajkumar","Malkharoda");
console.log(person.get()); 



// Abstraction 

       n           

class class2 extends car{
  constructor(n,n1){
      super(n,n1)
      this.address=n1;
  }
} 
const r=new class2("nsti","howrah");
console.log(r);         