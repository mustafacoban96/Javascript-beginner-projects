// async function fn(){
//     return 'hello';
// }
// console.log(fn())
// fn()
// .then(response => console.log(response))



// Promise version
var isError = true;
function getCategory(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            if(!isError){
                resolve('phone');
            }else{
                reject('error');
            }
            
        },1000);
    });
}

function getProducts(category){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(`5 products in ${category}`);
        },1000)
    });
}

//promise version
getCategory()
.then(getProducts)
.then(response => console.log(response))
.catch(err => console.log(err))


// async version
// we can use await only in async function....
async function getProduct(){
    try{
        let category = await getCategory();
        let result = await getProducts(category);
        console.log(result);
    }catch(error){
        console.log(error)
    }
    
}

getProduct();













