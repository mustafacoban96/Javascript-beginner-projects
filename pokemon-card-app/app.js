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
const types = document.querySelector('.types');
const card = document.querySelector('#card')



function place(pokemon){
    pokeName.innerHTML = pokemon.name;
    hp.innerHTML = `<span>HP</span> ${pokemon.stats[0].base_stat}`;
    attack.innerHTML = pokemon.stats[1].base_stat;
    defense.innerHTML = pokemon.stats[2].base_stat;
    speed.innerHTML = pokemon.stats[5].base_stat;
    if(pokemon.types.length === 1){
        types.innerHTML = `<span id='typ'>${pokemon.types[0].type.name}</span>`
        document.getElementById('typ').style.backgroundColor = `var(--${pokemon.types[0].type.name})`;
    }else{
        type1.innerHTML = pokemon.types[0].type.name;
        type2.innerHTML = pokemon.types[1].type.name;
        type1.style.backgroundColor = `var(--${pokemon.types[0].type.name})`;
        type2.style.backgroundColor = `var(--${pokemon.types[0].type.name})`;
    }
    card.style.background =  `radial-gradient(circle at 50% 0%, var(--${pokemon.types[0].type.name}) 36%,#ffffff 36%)`;
    pokeImage.src = `${pokemon.sprites.other['official-artwork'].front_shiny}`

}




function getExternalApi(number){
    fetch(url+number+'/')
    .then(response =>{
        return response.json()
    }).then(data =>{
       place(data);
    })
}





generateBtn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*100)+1
    getExternalApi(num);
})