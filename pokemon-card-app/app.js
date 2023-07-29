/*

*/
const url = "https://pokeapi.co/api/v2/pokemon/";
const hp = document.querySelector('.hp');
const pokeName = document.getElementById('poke-name');
const type1 = document.getElementById('typ1');
const type2 = document.getElementById('typ2');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const speed = document.getElementById('speed');
const generateBtn = document.getElementById('btn');
const pokeImage = document.getElementById('poke-img');


let num = Math.floor(Math.random()*20)

function place(pokemon){
    pokeName.innerHTML = pokemon.name;
}




function getExternalApi(number){
    fetch(url+number+'/')
    .then(response =>{
        return response.json()
    }).then(data =>{
        console.log(data)
       place(data);
    })
}

getExternalApi(num);

