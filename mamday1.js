console.log("Hellow")

console.error('Error!')
console.warn('Warning')

console.clear()
console.log('sdfsd')

var nme             //declared a variable
nme='Gunjan'        //initialization or assigning a value

var nme= 'Neeti'

//Javascript is a case sensitive language

var NME
var age=10.3456

console.log(nme)
console.log('nme')
console.log(typeof NME)
console.log(age)
console.log(typeof age)

//undefined
var city
console.log(city)


var first_name
var firstNameCity   //Camel Casing
var FirstNameCity    //Pascal Casing

//Arithmetic operators
var x=10
var y= 2
 
//Adddition (+) subtraction (-) multiplication (*) division (/)
console.log(x+y)

console.log('Exponent:'+x**y)  // x raised to power y 

console.log('Remainder: '+ x%y)   //x modulus y

console.log(++x) // First increment and then print    11

console.log(x++)  //First print , then increment      11

console.log(x--)     //12  

console.log(--x)     //10

//Comparison operators
var a= 14
var b= 13
console.clear()
console.log(a>b)    //true
console.log(b>=a)   //false
//greater than (a>b), greater than equal to (a>=b)
console.log(a<b)
console.log(a<=b)

//Not equals to
console.log('not equals to: ' ,a!=b)   //true
// console.log(a==b)

var str1= '4'   // type: string
var num= 4      // type: number

console.clear()
console.log(str1==num)   //True, compare only values, not type (irrespective of type)
console.log(str1===num)  //compare along with the type

var bool1= true     // type is boolean
console.log(typeof bool1)
var str1= 'true'   // type is string
console.log(typeof str1)
console.log(bool1===str1)
console.log('Exponent:',x**y)

var fName='Gunjan'
var lName='Madan'

console.log(fName + lName)   //concatenation or joining two strings


var c= 10
var d= 20

///interchange the values

var temp = c
c= d    
d= temp   

console.log(c,d)

var a =10 
var b= 20

var p=12
var q= 23

//a less than b and p to be less than q
console.log((a<b) && (p>q))   //AND Operator... all conditions need to be true to have o/p as true

console.log((a>b) || (p<q))   //OR Operator... even if one of the condition is true, o/p will be true

console.log(!(a>b))   //NOT operator.. inverse the result


//Assignment Operators
a=a+b
a+=b

a=a+1
a+=1

a-=1     //a=a-1
a*=1     //a=a*1
a/=b     //a=a/b

a%=b   //a=a%b

//Object - Collection of data

var student= {
    firstName : 'Aditya',
    lastName : 'Singh',
    age: 20,
    isAdult: true
}

console.clear()
console.log(student)    //print all the properties
console.log(student['age'])
console.log(student['city'])

student['firstName']= 'Aaditya'

student['city']='Pune'
console.log(student)

var a =10