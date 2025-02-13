let nums = [1, 2, 5, 6, 22, 44, 66, 3, 4, 17, 22, 444];
let number1 = 0
nums.forEach(num=>{
   number1+=num
})
console.log(number1);


//2
let arr = ["hello", 1234, "", false, NaN, 123, true, " ", null, "29.01.1992"]

let string = []
let number = []
let object = []
let boolean = []

arr.filter(a => {
   if (typeof a === "string"){
      string.push(a);
   }else if (typeof a === "number"){
      number.push(a);
   }else if (typeof a === "object"){
      object.push(a);
   }else if (typeof a === "boolean"){
      boolean.push(a);
   }
})

console.log(arr);
console.log(string);
console.log(number);
console.log(object);
console.log(boolean);