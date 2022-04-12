 class Createuser {
     constructor(firstname,lastname,email){
     this.firstname = firstname,
     this.lastname = lastname,
     this.email = email
 }
    about(){
   return `${this.firstname} is ${this.lastname}`
         }
  
 }
 const returnuser = new Createuser('diljan','malik');
 console.log(returnuser.about())


 class animal {
     constructor(name,age){
         this.name = name,
         this.age = age
     }
     eat(){
         return `${this.name} is eating`
     }
     iscute(){
         return true;

     }
 }
 class dog extends animal{
     constructor(name,age,speed){
         super(name,age)
         this.speed = speed
     }
     runss(){
         return `${this.name} is running at ${this.speed}kmh`
     }

 }
const animals = new animal('tommyeeeee' , 67)
const animalss = new dog('tommy' , 3)


console.log(animals.eat());
console.log(animalss.eat());

const tommy = new dog('jacki', 34 ,450);
console.log(tommy.runss());


//  gettter and setter