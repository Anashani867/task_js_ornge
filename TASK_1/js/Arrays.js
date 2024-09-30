var array=["Coding","Academy","By", "Orange"];

array.push("jordan");
console.log(array)
const myBest = array.slice(0, -3);
console.log(myBest)

console.log(array)
 array.splice(0,0,"welcome")
 array.splice(3,0,"to")
console.log(array)
array.shift();
console.log(array)

console.log(array.join(''));
console.log(array.join());

array.pop();
array.pop();
console.log(array)

/////////////////////////////////////////
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]
var tow=[];

vegetables.pop();
fruit.pop();

fruit.includes("orange")
fruit.push("1");
vegetables.push("1");
console.log(fruit)
console.log(vegetables.length)

tow=fruit+vegetables

console.log(tow)

fruit.splice(2, 2);
tow.reverse();
console.log(tow.toString())



