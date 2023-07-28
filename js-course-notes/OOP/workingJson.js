// async function populate(){
//     const reqUrl = '/employees.json';

//     const request = new Request(reqUrl);


//     const response = await fetch(request);
//     const superHeroes = await response.json()

//     return superHeroes;
// }


// console.log(populate());


// document.querySelector('#getEmployeee').addEventListener('click',() =>{
//     document.getElementById('employees').innerHTML = populate().then;
// })



const btnn = document.querySelector('#getEmployee');
console.log(btnn)


function loadEmployee(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employees.json',true);

    xhr.onload = function(){
        if(this.status === 200){
            let employees = JSON.parse(this.responseText);
            let html ='';
            employees.forEach(employee => {
              html+=`
                <tr>
                    <td>${employee.firstName}</td>
                    <td>${employee.lastName}</td>
                    <td>${employee.age}</td>
                </tr>
                `
            });

            document.querySelector('#employees').innerHTML = html;
        }
    }


    xhr.send();
}
btnn.addEventListener('click', loadEmployee);