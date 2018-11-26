import {pokemon} from "./pokemon.js";

(function(){
    displayPokemon();
})();

window.runSomething = function (val){
    if(val.value == "default"){
        displayPokemon();
    } else if(val.value == "art"){
        displayArtPokemon();
    } else if(val.value == "shiny"){
        displayShinyPokemon();
    }
}
window.searchforpokemon = function (input){
    let findthis = input.value;
    $('.window').html('');

}

function displayPokemon(){
    $('.window').html('');
    for(let i = 0; i < pokemon.length; i++){
        $(".window").append(`<div class="pokedex" id="${pokemon[i].toLowerCase()} ${i}" ><span class="name">${pokemon[i]} #${i + 1}</span><img class="img" src="http://www.pokestadium.com/sprites/xy/${pokemon[i].toLowerCase()}.gif" /></div>`)
    }
}

function displayArtPokemon(){
    $('.window').html('');
    for(let i = 0; i < pokemon.length; i++){
        $(".window").append(`<div class="pokedex" ><span class="name">${pokemon[i]} #${i + 1}</span><img class="art" src="http://www.pokestadium.com/assets/img/sprites/official-art/${pokemon[i].toLowerCase()}.png" onerror="this.src='http://www.pokestadium.com/sprites/xy/${pokemon[i].toLowerCase()}.gif'"/></div>`)
    }
}

function displayShinyPokemon(){
    $('.window').html('');
    for(let i = 0; i < pokemon.length; i++){
        $(".window").append(`<div class="pokedex" ><span class="name">${pokemon[i]} #${i + 1}</span><img class="img" src="http://www.pokestadium.com/sprites/xy/shiny/${pokemon[i].toLowerCase()}.gif" onerror="this.src='http://www.pokestadium.com/sprites/xy/${pokemon[i].toLowerCase()}.gif'"/></div>`)
    }
}