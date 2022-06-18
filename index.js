var a = 10
var b = 20


console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(++a)
console.log(b++)

console.log(--a)
console.log(--a)
console.log(a--)
console.log(a)


console.log(a%b)
console.log(a**b)
console.clear()
console.log(a+b)

console.clear()
var x = 5
var y = 10

x += y
console.log(x)
x -= y
console.log(x)

x *= y
console.log(x)

x /= y
console.log(x)

x %= y
console.log(x)



console.clear()


// functions


function printName(firstname, lastname){
   
    console.log("Hello", firstname, lastname);

}
printName("sarvesh", "mishra");


var res = 0;

function add(n1, n2){
    res = n1 + n2
    return res
}
add()


function CountChar(word, cha){
    var c=0;
    for(i=0; i<word.length; i++){
        if(word[i]== cha)
        c++
    }
    console.log(c)
}
CountChar("bookoooooos", "o");