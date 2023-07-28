

var xhr = new XMLHttpRequest();
/*
0: request not initialized
1: server connection established
2: reqeust received
3: processing request
4:request finished and response is ready
*/


/*
200: 'ok'
403: 'forbidden'
404: 'not found'
*/ 


// request başlatıp olay tetikliyoruz.
// readyState 4 => serverin bize verdiği cevap hazır demektir.  
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4  && xhr.status === 200){
        
        console.log(xhr.responseText)
    }
}

xhr.onprogress = function(){
    console.log('yükleniyor....')
}
xhr.open('GET', 'msg.txt',true); // true => asenkron
xhr.send();
console.log('qweqwe')