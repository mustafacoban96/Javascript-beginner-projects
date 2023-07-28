// text

function getText(){
    fetch('text.txt')
    .then(response =>{
        console.log(response)
        return response.text();
    }).then((data) =>{
        console.log(data)
        return data
    }).catch(error => {
        console.log(error);
    })
    
}

//getText()
// json
function getJson(){
    fetch('product.json')
    .then(response =>{
        return response.json();
    })
    .then((data) =>{
        data.forEach(phone => {
            console.log(phone.name)
        });;
        return data
    })
}

//getJson()

//external api

function getExternalApi(){
    fetch('https://randomuser.me/api/?results=5')
    .then(data => {
        return data.json()
    })
    .then(users => {
        users.results.forEach(user => {
            console.log(user)
        });
    })
    .catch(error=>{
        console.log(error); s
    })
}

getExternalApi()