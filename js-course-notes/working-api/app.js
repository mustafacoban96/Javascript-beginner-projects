const getOneBtn = document.getElementById('getOne');
const getAllBtn = document.getElementById('getAll');
const tableBody = document.getElementById('table-body');
const inp = document.getElementById('inp');
const postBtn = document.getElementById('post-data');


function getAll(){
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let datas = JSON.parse(this.responseText);
            let html = '';
            datas.forEach(data => {
                html += `<tr>
                <th scope="row">${data.id}</th>
                <td>${data.userId}</td>
                <td>${data.title}</td>
                <td>${data.body}</td>
                </tr>`
                
            });

            tableBody.innerHTML = html;
        }
    }

    xhttp.open('GET' ,'https://jsonplaceholder.typicode.com/posts/',true);
    xhttp.send();

}


function getOne(id){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let data = JSON.parse(this.responseText);
            let html = '';
            
                html += `<tr>
                <th scope="row">${data.id}</th>
                <td>${data.userId}</td>
                <td>${data.title}</td>
                <td>${data.body}</td>
                </tr>`;
            tableBody.innerHTML = html;
        }
    }
    xhttp.open('GET' ,`https://jsonplaceholder.typicode.com/posts/${id}`,true);
    xhttp.send();
}



// post method
function postData(){
    const data = {
        userId: 1,
        title: "new title",
        body: "new body"
      }
      var jsn = JSON.stringify(data);
      let url = `https://jsonplaceholder.typicode.com/posts/`;
      var xhr = new XMLHttpRequest();
      xhr.open('POST',url,true);
      xhr.setRequestHeader('Content-type','application/json; charset=utf-8');


      xhr.onload = function(){
        if(xhr.status === 201 && xhr.readyState === 4){
            var post = xhr.responseText;
            console.log(post)
        }
      }

      xhr.send(jsn);
}

postBtn.addEventListener('click' ,postData);









getOneBtn.addEventListener('click',function(){
    getOne(inp.value);
});


getAllBtn.addEventListener('click',getAll)