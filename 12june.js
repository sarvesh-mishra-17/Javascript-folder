//Global and Local Scope

var num= 10   //Global variable

function sqOfNum(){
    var n=1        //Local Variable
    num=20        //referring to the same global variable
    console.log('Inside Function:',num)
}
console.log('Before func is called:', num)
sqOfNum()

console.log('Outside Function:', num)
// console.log('Trying to access Local variable:',n)


var res= 20

function print(){
    var res=10          //Redeclared or created a new local variable
    console.log('Inside function:', res)
}
console.log('Before func is called', res)
print()
console.log('Outside function:', res)
console.clear()

//Nested Loops- Loop inside another loop
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for(var i=1; i<=5; i++){
   var str=''
   for(var j=1; j<=i;j++)
   {
       str=str+ ' '+ j.toString()
   }
   console.log(str)
}


//Nested Functions- Function inside a function
// Inner function can only be accessed inside the outer function

function greet(){

    var nme='Gunjan'
    function printName(){
        var c= 10
        console.log(nme)
    }
    printName()
    // console.log(c)
}

greet()
// printName('sdfsd')

//Recursion -- needs some practice on functions

//String Methods

var str='Hello, how are you?'
//Charat
console.log(str.charAt(4))
//Concat
str= str.concat('Welcome')
console.log(str)

//Replace
str= str.replace('Hello','hi')
console.log(str)

var data= '12|12|434|324|545'

//Split
var dataList= data.split('|')
console.log(dataList)

//Trim
var d= '  Delhi  '
d= d.trim()
console.log(d.trim())

//Change the case
console.log(d.toUpperCase())
console.log(d.toLowerCase())

//**SLICE**
var str='Hello, how are you?'
console.log(str.slice(7,10))  //Last is not counted, give one greater index

console.log(str.replace(' how ',''))

console.log(str.search('how'))     //Returns first occurence of the thing being searched

//Array Functions

var cars=['Maruti','Toyota', 'Tata','Hyundai']

//Push and Pop-- Insert or remove element from the end of array
cars.push('BMW')
console.log(cars)

console.log(cars.pop())
console.log(cars)

//Shift- Unshift-- Remove or add element in the beg of array
cars.shift()    //Removing
console.log(cars)

cars.unshift('Mercedes')
console.log(cars)

//Splice -- it makes changes at any position 
cars.splice(2,1,'Mahindra')   // 2 is the index where you want to make change, 1 is the count you want to remove, mahindra will be added at 2nd index
console.log(cars)

cars.splice(3,3)
console.log(cars)

var cars=['Maruti','Toyota', 'Tata','Hyundai']

var cars2=['BMW','Mercedes']

cars= cars.concat(cars2)
console.log(cars)

//Slicing on array
console.log(cars.slice(1,3))

//Sorting an array
cars.sort()
console.log(cars)

//Reversing an array

cars.reverse()
console.log(cars)


//Foreach loop- when we want to perform an action on all the elements of array
var num=[12,34,53,12,55,32,5,66]

//square every number present in the array

num.forEach(sqOfNum)

function sqOfNum(value){
    console.log(value*value)
}

//For each-- write a function where in print square of number if nm is even, print cube otherwise