// var p = new Promise(function(resolve,reject){
//     if(true){
//         resolve('success');
//     }
//     else{
//         reject('failure');
//     }
// });


// p.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err)
// })


//2

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve(5);
//     },1000)
// }).then(function(number){
//     console.log(number);
//     return number*number;
// }).then(function(number){
//     console.log(number);
// })

const isMomHappy = true;

const willGetNewPhone = new Promise((resolve,reject)=>{
    if(isMomHappy){
        const phone = {
            name: 'IPhone 8',
            price: 4000,
            color:'silver'
        }
        resolve(phone)
    }else{
        const error = new Error('mom is ot happy');
        reject(error);
    }
});


const showToFriends = function(phone){
    const message = 'He friends this is my new phone ' + phone.name;

    return Promise.resolve(message);
}

//.then(showToFriends)
const askMom = function(){
    willGetNewPhone
    .then(data =>{
        showToFriends(data)
        .then(message=>console.log(message))
    })
    .catch(error =>{
        console.log(error);
    })
}

askMom();