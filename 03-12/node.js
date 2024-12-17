// let num = 45671;
// num = num.toString();
// console.log(num);
// console.log(typeof num)

// let num = 10.524
// console.log(num.toFixed(1));
// console.log(num.toPrecision(8))

// let a = null
// console.log(null<=0)
// console.log(null>=0)
// console.log(null==0)
// console.log(null<0)
// console.log(null>0)

//Arithmetic Operators
// +, -, / ,*,%, **
// <, > , <=, >=, !=
// ==, ===

// console.log(2+5)
// console.log(2-5)
// console.log(2*5)
// console.log(2/5)
// console.log(2%5)
// console.log(2**5)

// console.log(7>8)
// console.log(7<8)
// console.log(7>=8)
// console.log(7<=8)
// console.log(7!=8)

// console.log(55 == "55")
// console.log(55 === "55")

// console.log(1+ "2" + "2")
// console.log(1+ +"2" + "2")
// console.log(1+ +-"1" + "2")
// console.log(+"1"+ "1" + "2")
// console.log("A" + "B" + "2")
// console.log("A" - "B" + "2")

//Math Operators
// console.log(Math.ceil(123.3))
// console.log(Math.floor(123.3))
// console.log(Math.log(123.3))
// console.log(Math.round(123.8))
// console.log(Math.random()*10)
// console.log(Math.floor(Math.random()*10) + 1)

// console.log(Date.now())
// let curDate = new Date();
// console.log(curDate.toString())
// console.log(curDate.toLocaleString())
// console.log(curDate.toLocaleDateString())
// console.log(curDate.getDate())
// console.log(curDate.getMonth())
// console.log(curDate.getFullYear())

// // Array Properties
// let arr = [1,"Payal",true,null,undefined,2,3,4,5]
// console.log(arr[1])
// //push - Add the element at end
// arr.push("Mrunalini")
// console.log(arr)
// //pop - Remove the element from last
// arr.pop()
// console.log(arr)
// //unshift - Add the element in start
// arr.unshift(0)
// console.log(arr)
// //shift - Remove the element from start
// arr.shift()
// console.log(arr)
// //slice - Cut the array
// arr1=arr.slice(1,5)
// console.log(arr1)
// //spilce - Splice is used to remove the index and after index number
// arr.splice(2,3)
// console.log(arr)

//Object Properties
// let obj = {
//   name: "Payal",
//   year: 2024,
//   univ: "Parul",
//   "has laptop": true,
//   location : {
//     city : "Jaipur",
//     state: "Rajsthan",
//     zipcode: 123456
//   }
// }
// console.log(obj.location.city)
// console.log(obj.location["city"])
// console.log(obj["location"]["city"])
//console.log(obj.name)
//console.log(obj["has laptop"])//square bracket access methid is more preferable
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// Object.freeze(obj)
// obj.name = "Mrunalini"
// console.log(obj)

//Destructioring

// let obj = {
//   name: "Payal",
//   year: 2024
// }
// const {name: fullName} = obj
// console.log(fullName)

//Loops in javascript
//for Loops
// let arr = [1,12,123,1234,12345]
// for(let i=0; i<arr.length; i++){
//   console.log(arr)
// }

//while Loops
// let i = 0
// while(i<5){
//   console.log(i)
//   i++;
// }

//Do-While
// let a = 10
// do{
//   console.log(a)
//   a++
// }
// while(a<15)

//for...of
// arr = [4,89,9,87,98]
// for(let elements of arr){
//   console.log(elements)
// }

let obj = {
    name: "Payal",
    year: 2024,
    Month: "December"
  }
  for(let keys in obj){
    console.log(obj[keys])
  }
  for(let keys in obj){
    console.log(keys)
  }
  
  
  