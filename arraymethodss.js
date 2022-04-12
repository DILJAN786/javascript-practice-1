// const number = [2,4,6,8];

// function multiplyby2(number,index){
//     console.log("index is",index);
//     console.log(number*2);
// }
// multiplyby2(number[0],0);

// for (let i=0 ; i < number.length; i++){
//     multiplyby2(number[i],i);
// }

// number.forEach(multiplyby2);


// const users =[
//     {firstname:'diljan',age:12},
//     {firstname:"muhammad",age:14},
//     {firstname:"zaheer",age:18}
// ]
// users.forEach(function(user){
//     console.log(user.firstname,user.age)
// });



// //////////   MAP METHOD

// const numbers =[2,4,6,9,7]

// const square = function(number){
//     return number * number
// }

// let group = numbers.map(function(number){
//     return number * number
// });
// console.log(group);


// const users =[
//     {firstname:'diljan',age:12},
//     {firstname:"muhammad",age:14},
//     {firstname:"zaheer",age:18}
// ]

// let follow =users.map(function(name){
//     return name.firstname
// });
// console.log(follow);


//   FILTER METHOD

// const numbers = [2,4,6,9,7]
// const isEven = function(number){
//     return number%2 ===0;
// }
// const evenNumber = numbers.filter(isEven);
// console.log(evenNumber);


// const numbers = [2,4,6,9,7]
// const isOdd = function(number){
//     return number%2 !==0;
// }
// const evenNumber = numbers.filter(isOdd);
// console.log(evenNumber);



// REDUCE METHODS

// const number = [2,4,6,9,7]

// const sum = number.reduce((accumulater , currentvalue)=>{
//     return accumulater + currentvalue
// })
// console.log(sum);


// const usercart = [
//      {productid:1,productname:'mobile',price:1200},
// {productid:1,productname:'laptop',price:1500},
// {productid:1,productname:'tv',price:2200}

// ]
// const total =usercart.reduce((totalvalue ,currentvalues)=>{
// return totalvalue + currentvalues.price
// },5000)

// console.log(total); 


// SORT METHOD

// const number = [5,9,1200,410,3000]
// number.sort((a,b)=>{
//     return a-b;
// })
// console.log(number);




// const usercart = [
//     {productid:1,productname:'mobile',price:1200},
// {productid:1,productname:'laptop',price:1500},
// {productid:1,productname:'tv',price:2200}

// ]

// const lowertohigh = usercart.slice(0).sort((a,b)=>{
//     return b.price - a.price
// });
// console.log(lowertohigh);


//  FIND METHOD

// const myArray = ['hello' , 'cat' , 'dog' , 'lion'];
// function islenght(stringns){
//     return stringns.length === 3;
// }
// const ands = myArray.find(islenght)
// console.log(ands);


// const usercart = [
//     {productid:1,productname:'mobile',price:1200},
// {productid:2,productname:'laptop',price:1500},
// {productid:3,productname:'tv',price:2200}

// ]

// const myuser = usercart.find((user)=>user.productid===2);
// console.log(myuser);


// EVERY METHOD

// const numbers2 = [2,4,6,9]

// const ans = numbers2.every((number)=>number%2===0);
// console.log(ans);

//  SOME METHOD




//   ITERABLES 

// const firstname ='diljan'
// for (let user of firstname){
//     console.log(user);
// }

// const items = ['item1','item3','item2']
// for (let item of items){
//     console.log(item);
// }
 


//     array like object

// const firstname = "harshit";
// console.log(firstname.length);
// console.log(firstname[2]);



//     SET

// const numbers = new Set ([1,2,3,4,5])
// console.log(numbers);

// const number = new Set();
// number.add(1);
// number.add(2);
// number.add(['item1','item2'])
// number.add(['item1','item2'])
// console.log(number);
// if(number.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for (let numbers of number ){
//     console.log(numbers);
// }


// const myarray = [1,2,3,4,4,5,5,6,7,8,9]
// const unique = new Set(myarray);
// console.log(unique );
// let length = 0;
// for(let element of unique){
//     length++;
// }
// console.log(length);


//  MAP 

// const person = new Map();
// person.set('firstnmae','diljan');
// person.set('age',21);
// person.set(1,'one')
// person.set([1,2,3],'onetwothree')
// console.log(person);

// console.log(person.get('age'))

// for (let persons of person){
//     console.log(persons);
// }
// for(let [key,value] of person){
//     console.log(key,value)
// }


//   how to clone object using object assign

const obj ={
    key1:'value1',
    key2:'value3'
}

const obj2 =Object.assign({},obj)
obj.key3= 'value3';
console.log(obj)
console.log(obj2)
