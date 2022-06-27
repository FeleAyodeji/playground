/*console.log("big boy coming");

console.table({a: 1 , b: 2})
console.error("stop playing");
/* let symbol = symbol();
console.log(typeof symbol);
console.log(symbol); */

//ARRAY

/*const feleProperties = ["10bigcars" , "28bigmansions" , "10 billion dollars investment" , "two private jets"];
console.log(feleProperties);
console.log(typeof feleProperties);*/

//object

/* var personalInfo = {
    state : "Ekiti state" ,
    city : "ijero world"
};
console.log(personalInfo);
console.log(typeof personalInfo);

//date 

const today = new Date();
console.log(today);
console.log(typeof today);
console.log(today.length); */

/*console.log("bigboydee".charAt(0));
console.log("databitcoin".length)
console.log("hello" + " bitcoin" + " boy")
console.log("bitcoin badboy fele".toUpperCase())*/

// var shouldbeTrue = true;
// if(shouldbeTrue = true){
//     console.log("800 bitcoin cash for fele ayodeji")
// }
// else{
//     console.log("still crypto rich sha")
// }

// var isFalse = 0; //the following evaluates false since it is 0
// var isNo; //the following evaluates false since it has no value assigned
// var isTrue = "wbhbdh" ; //the following evaluates true it has value assigned to it
// console.log(Boolean(isNo));

// var myObject = new Object(); //an object is a colleccton of properties .it is also a collections of name value pair
// myObject["1"] = "billionaire Deji"
// myObject["2"] = "bitcoin boy"
// myObject["3"] = 'big car boy'
// console.log(myObject)

// object can aslos be written this way

// var myObject = { 1: "chris" , 2: "fele" , 3: "dele"}
// console.log(myObject)

// var personalData = { 
// Name : "fele ayodeji" , 
// career : "Engineering and Tech expert" ,
// Age : 22 ,
// level : "400" 
// }
// console.log(personalData)
// console.log(personalData.Name) //to access the value in the object

// var moneyBalance = { 
// access : "$1miillion" ,
// gtBank: "$38million" ,
// firstBank : {
//     naira :'79 billion naira' ,
//     dollar : "$29million" } , //showing how to write an obeject in an object
// showAcctBalance : function(){
//     console.log( "$900 million dollars in crypto and also ACCESS :" , this.access )
// } //declaring a function in an object
// } 
// moneyBalance.showAcctBalance() //calling the function 
 
// var firstBankNaira = moneyBalance.firstBank.naira ; //showing how to call an object in an object
// console.log(firstBankNaira);

//constructor pattern for creating objects
// function personalData (name , career , age , level){
//     this.name = name
//     this.career = career
//     this.age = age
//     this.level = level
//     this.sayName = function (){
//         console.log("my name is :" ,this.name)
//     }
//     this.sayCareer = function (){
//         console.log("i am a ", this.career, " by profession")
//     }
// }
// var candidate1 = new personalData("feleayodeji", "Engineer" , 21 , 400 )
// candidate1.sayCareer()
 
//array is a collection of data
// var myProperties = ["5cars" , "26real estate properties" , "$900 million crypto assets"] 
// myProperties.push("one beautiful wife " , "three beautiful kids") // adding to the array
// myProperties.pop()// takes the property of the last data of the array
// var sortedProperties = myProperties.sort() //helps to sort list of data in an ascending order
// var reverseProperties = myProperties.reverse() //helps to reverse the elemenets or list of data in an array in place
// var slicedProperties = myProperties.slice(2,7)// returns a copy of a section of array . from start to end
// console.log(sortedProperties)

//nested if statements
// const queenGbemi = true
// const sideChicks = false
// const bestie = false

// if (queenGbemi !== sideChicks){
//     console.log("EXCELLENT the Queen deserves Queen treatment")
//     if (sideChicks == bestie){
//         console.log ('A real Queen deserves no rival!') //this if statement will only run if the first if statement is true
//     }
//     if (bestie !== queenGbemi){
//         console.log("gbemisola olaosebikan is the Queen") //this if statement will run if the first if statement is true regardless of the second if statement
//     }

// }
// const costOfFood = 290
// const costOFWater = 560
// const fuelAvailability = false
// const unstableDollar = true
// //using logical operator instead of nested if . 
// if ((costOfFood < costOFWater && !fuelAvailability) || (!unstableDollar) ){
//     console.log('the country is fvcked up')
// }
// else if (!unstableDollar){
//     console.log("simply not right")
// }
// else{
//     console.log("the country is big fvcked")
// }

//writing a function with a return value . the return value sends it back to the function itself

// 
// function acctNo(serialNum){
//   accessCode = serialNum * 0.02
//   return accessCode
// }

// console.log (acctNo(20063))

// function acctNo(serialNum){
//     accessCode = serialNum * 0.02
//     return accessCode
//   }
  
//    acct1 = acctNo(20063)
//    acct2 = acctNo(20365)
  
// function acctAdder ( num1 , num2){
//     return num1 + num2
// }
//  console.log("the addition of the number is" , acctAdder(acct1 , acct2))

// using afunction to change to a value in an array
// const myInfo = {name: "Fele Ayodeji" , age: 21} 

// function changeAge(myObj){
//     myObj.age = 29
// }

// console.log(myInfo)
// changeAge(myInfo)
// console.log(myInfo)

//using a function to change to add a value to an array
// const num = [2,4,6,8]

// function pushNum (digit){
//     digit.push(10)
// }

// console.log(num)
// pushNum(num)
// console.log(num)

//nested function
// function squareAndMultiply(num1 , num2){
//     function squarer(x){
//         return x * x
//     }
//     function MultiplyBy2(y){
//         return y * 2
//     }

//     return squarer(num1) + " " + MultiplyBy2(num2)
// }

// console.log(squareAndMultiply(4, 6))

// function personFormatter(firstName, lastName, age){
//     function formatNames(arg1 , arg2){
//         return arg1 + "" + arg2   
//      }
//      function dataformatter(fullName, num){
//          const formatData = {
//              name: fullName,
//              age: num
//          }
//          return formatData
//      }
//      const formattedName = formatNames(firstName , lastName )
//      return dataformatter(formattedName , age)
// }

// console.log(personFormatter("Fele Ayodeji" , " Samuel" , 21))


//writing an arrow function
// const multiplier = (x , y) => {
//     return x * y 
// }

// console.log(multiplier(2,6))

//using the map function
//writing an object in an array

const users = [
    {name: "deji" ,age:120},
    {name:"gbemi" ,age:21},
    {name:"syl",age:20}
] 
// const mapUserNames = (myArr) => 
//     myArr.map((user) => user.name 
//     )

// console.log(mapUserNames(users))  //using arrow function

function mapUserNames (userNames){
   return users.name
}
const output1 = users.map(mapUserNames)
console.log(output1)  //without using arrow function


//double = [6,8,10,12,14,8,18]  //using map function
//triple = [9,12,15,21,12,29]
//binary = [ '11','100',101,110,111,100,1001]
  

// const numArr = [3,4,5,6,7,4,9]

// function double (x){
//     return x*2
// }

// const output1 = numArr.map(double)
// console.log(output1)  // printing out double of the array

// function triple (x){
//     return x*3
// }

// const output2 = numArr.map(triple)
// console.log(output2)  //printing out triple of the array

// function binary (x){
//     return x.toString(2)
// }

// const output3 = numArr.map(binary)
// console.log(output3)  //print out the binary of the array


//sum of the array
// const arr = [4,5,3,6,8,9,3,4]

// function findSum(arr){
//     let sum = 0
//     for (let i = 0; i< arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum
// }

// console.log(findSum(arr))

// //using the reduce function in array to find the sum of the array

// const output = arr.reduce(function(curr,acc){
//     acc = acc + curr
//     return acc
// },0)
// console.log(output)

// //finding the maximum number in the array

// function findMax(arr){
//     let max = 0
//     for (let i = 0; i< arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(findMax(arr))

// //using the reduce function to find the maximum number of the array

// const output1 = arr.reduce(function(max,curr){
// if (curr > max){
//     max = curr
// }
// return max
// },0)

// console.log(output1)

// const details = [
//     {firstName: 'ayodeji' , lastName: 'fele' , age:100} ,
//     {firstName:'gbemisola' ,lastName:'olaosebikan', age:90 },
//     {firstName : 'elon' ,lastName: 'musk' ,age: 100},
//     {firstName: "dangote" , lastName: "aliko" ,age: 120}
// ]
  
// //using map function to get the firstname and lastname of the array
// function justNames(x){
//     return x.firstName + " " + x.lastName
// }
// const output = details.map(justNames)
// console.log(output)

// //{100 : 2 , 120 : 1 , 90 : 1} using filter function to get the number of ages in the array

// const output1 = details.reduce(function(acc , curr){
//   if (acc [curr.age]){
//       acc[curr.age] = ++acc[curr.age]
//   }
//   else{
//       acc[curr.age] = 1
//   }
//   return acc
// },{})

// console.log(output1)

// //using filter function to get the ages less than 100 and map function to map out just the firstname with the age

// const output2 = details.filter((x)=> x.age > 90) //.map((x)=> x.firstName)     this map function will only print out the firstname of the filtered age

// console.log(output2)









