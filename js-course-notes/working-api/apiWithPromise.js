let myObj = {
    //method : "POST",
    url : "https://randomuser.me/api/?results=5",
    headers : {
        "content-type":"applicattionjson"
    },
    // body:{
    //     name ...
    // }
}


let request = obj => {
    return new Promise((resolve,reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET" , obj.url);

        if(xhr.headers){
            Object.keys[obj.headers]
            .forEach(key => {
                xhr.setReqeustHeader(key,obj.headers[key]);
            });
        }

        xhr.onload = () =>{
            if(xhr.status >=200 && xhr.status<300){
                resolve(xhr.response);
            }else{
                reject(xhr.statusText);
            }
        }
        xhr.send(obj.body);
    });
}

request(myObj).then(data => {
    let users = JSON.parse(data);
    users.results.forEach(user => {
        console.log(user)
    })
}).catch(error =>{
    console.log(error)
})