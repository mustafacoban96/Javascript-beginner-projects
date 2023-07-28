// // es5

// let welcomeES5 = function(){
//     console.log('Hello from ES5');
// }

// welcomeES5();

// // ES6 

// let welcomeES6 = () =>{
//     console.log('es6');
// }

// welcomeES6();



// //5
// let getProductES5 = function(id,name){
//     return {
//         id: id,
//         name: name
//     }
// } 

// console.log(getProductES5('1', 'Samsung S8'));
// //6 
// let getProductES6 = (id,name) => {
//     return {
//         id: id,
//         name: name
//     }
// }

// console.log(getProductES6('122','Mustafa'));

// //ES5
// const products = [
//     {name:'Iphone 8 ', price:'2000'},
//     {name:'Iphone 5 ', price:'3000'},
//     {name:'Iphone 6 ', price:'2000'},
//     {name:'Iphone 7 ', price:'6000'},
//     {name:'Iphone 9 ', price:'22000'},
// ];

// let priceES5 = products.map(function(product){
//     return product.price;
// });

// console.log(priceES5);


// //ES6
// let priceES6 = products.map(phone => phone.name);
// console.log(priceES6);

// let myPhone = products.filter(phone => phone.price=='2000');
// console.log(myPhone.map(phone => phone.name));


// let list = {
//     category: 'phone',
//     names: ['IPhone 8' , 'Samsung S8' , 'Iphone 7'],
//     call : function(){
//         this.names.map((name) => {
//             console.log(`${this.category} ${name}`)
//         })
//     }
// }

// //list.call()



// let ogrenci = {
//     school: 'HKU',
//     names: ['mustafa','omer','berkay'],
//     ara: function(){
//         this.names.map((name =>{
//             console.log(`${this.school} ${name}`)
//         }))
//     }
// }

// ogrenci.ara();
/////////////////////////////////////////////spread
// function getTtotal(a,b,c){
//     return a+b+c;
// }

// let numbers = [10,20,30]
// //ES5
// console.log(getTtotal.apply(null,numbers));

// //ES6 

// console.log(getTtotal(...numbers))


// const divs = document.querySelectorAll('div');

// let tags = [...divs]
// console.log(tags)

// tags.forEach(tag => tag.style.color = 'red')


//rest
// let verify = (...ages) =>{
//     ages.forEach(age => console.log(age >=18));
// }

// verify(12,43,22,23,17,45,56);


////////////////////////////////////////////////////////////////////////


//Destructuring

// var a,b,rest;


// [a,b,...rest] = [10,20,30,40,50,60];
// console.log(a);
// console.log(b);
// console.log(rest);



// ({a,b,...rest} = {a:10, b:20,c:40,d:50,e:60});
// console.log(a);
// console.log(b);
// console.log(rest)


// Array destructuring

// const arrConfig = ['localhost','8080','900'];

//     //ES6
//     const [server,port,timeout] = arrConfig;
//     console.log(server,port,timeout);

//Object dest..
// const objConfig = {
//     server : 'localhost',
//     port: '8080',
//     timeout: 900
// }

//     // var server = objConfig.server;
//     // var port = objConfig.port;
//     // var timeout = objConfig.timeout;

//     const {server, port, timeout=90} = objConfig;
//     console.log(timeout) // 900

//     // let {timeout : t} =objConfig;
//     // console.log(t)

//ES6 function

const divs = document.querySelectorAll('div');

for(let div of divs){
    div.style.fontSize = '2rem';
    div.style.color = 'red'
}
    

//from 

const fruits = [
    {name:'apple',price:20},
    {name:'banana',price:10},
    {name:'peach',price:40},
    {name:'pear',price:30},
]

console.log(Array.from(fruits , fruit => fruit.price));
console.log(fruits.find(fruit => fruit.name == 'apple'));
console.log(fruits.filter(fruit => fruit.name =='banana'));
console.log(fruits.findIndex(fruit => fruit.price==30));

 
