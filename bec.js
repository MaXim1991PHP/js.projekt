
'use strict' /*строгий скрипт */


var a=15;/*number */
var helloWorld='hi'; /*string */
var isSum= 5 > 8; /*bollean */
var myUndefined; //undefined
var myNull = document.querySelector('body'); // null
//6 object
//array
var cities = ['Dnipro','Kiev','Odessa'];  //massiv 
cities.push('Lviv'); //dobavity noviy element v masiv
//obiekt s elementami
var user={
    age:25,
    email:'vasa@gmail.com',
    name: 'Vasa',
};
user.index =49000; //user['index'] i tak norm

//console.log(cities.length); //kolijestvo elementov masiva

var users=[
    {name:'Vasa',age:'25',phones:['+38073','+788']},
    {name:'Pit',age:'35',phone:''},
    {name:'Ann',age:'55',phone:''},
]
//user[2]='fffff'   zamena ili  dobavlenie

console.log(users [0].phones[1]);











var answer = prompt ('your age?');

console.log(answer);

if (answer > 60) {
    alert ('your age is'+answer);
} else if (answer<50) {
    alert ('fakin shet');
} else {
    alert ('vasa loh');
};

/*калькулятор */
'use strict'

var a = +prompt('enter number a');
var o = prompt('enter operation');
var b = +prompt('enter number b');
var result= 0;
/*
if (o ==='+') {
    result= a+b;
}
if (o ==='-')
{
    result= a-b;
}
if (o ==='*')
{
    result= a*b;
}
if (o ==='/')
{
    result= a/b;
}

alert('your answer' + result) */

switch (o) {
    case '+':result =a+b;break;
    case '-':result =a-b;break;
    case '*':result =a*b;break;
    case '/':result =a/b;break;

}
alert('your answer' + result)



'use strict'

var 

function renderList(data, containerId) {
    var container = document.querySelector(containerId);
    var res ='';
    for (var item of data) {
        res +=`<li>${item}</li>`;
    }
    container.innerHTML =res;
}
renderList (name)
renderList ()




function sum (a, b,r) {
    var res =a + b + r;
    
    return res;
    }
    var result = sum(5,8,9);
    
    console.log(result)
    
    
    
    
    var ar =[1,5,8];
    function sum (data) {
        var result = 0;
        for (var num of data) {
            result += num;
        }
        return result;
    }
    