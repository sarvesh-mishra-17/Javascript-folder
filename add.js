var a = 5
var b = 10

c = a + b
console.log(c);
c = b - a
console.log(c);

var name = "Sarvesh"
var surname = "mishra"

console.log(name + " " +surname)

var student = {
    firstName : "Sarvesh",
    lastName : "Mishra",
    age: 22,
    isAdult: true,
    isStudent: false
}

console.log(student.firstName)
console.log(student.lastName)
console.log(student.isStudent)

console.clear()

var num1 = 4
// var num2 = 4

num3 = num1 * num1
console.log(num3)

function add(num1, num2){
  
    var sum = num1 + num2
    console.log(sum)
    

}
add(14, 5)


function subtract(num1, num2){
    var sub = 0
    sub = num1 - num2
    console.log(sub)
}

subtract(10, 1)

function multipy(num1, num2){
    var mul = 0
    mul = num1 * num2
    console.log(mul)
}

multipy(3, 3)

console.clear()

// This is universal logic will work for all the array if we want to check whether the value is present or not
var as = [4,5,6,8,10,8,54,8,45];

var arr = ["nitiesh", "manju", "sarvesh", "rahul", "sarvesh", "dristi", "sarvesh", "dev"];  //we must require for loop
var search = "sarvesh";

function isSearch(arr1, value){
    var flag = false;
    var num = [];
 // var n = arr1.length
    for(var i = 0; i < arr1.length; i++){    // arr1.length = n
        if(arr1[i] == value){
            flag = true;
            num.push(i+1)

            
            

        }
        
        
    }
    if(flag == false){
        return -1
    }
    return num
}


console.log(isSearch(arr, search))










