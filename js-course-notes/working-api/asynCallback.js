var products = [
    {id:1,name:'Samsung S8',price:3000},
    {id:2,name:'Samsung S6',price:2000},
    {id:3,name:'Samsung S5',price:1000}
];

                        //callback and promise seperatly
function addProduct(prd,callback){

    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            products.push(prd);
            let added = false; // control point

            if(added){
                resolve();
            }else{
                reject('hata: 500')
            }
        });
    });

    // setTimeout(()=>{
    //     products.push(prd);
    //     callback();
    // },0.500);
}


function getProducts(){
    setTimeout(()=>{
        products.forEach(p => {
            console.log(p.name)
        });
    },1000);
}

// callback
// addProduct({id:5,name:'apple 10', price:5000},getProducts);

//promise
addProduct({id:5,name:'apple 10', price:5000})
.then(getProducts)
.catch(function(err){
    console.log(err)
});