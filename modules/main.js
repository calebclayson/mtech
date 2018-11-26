import {pokemon} from "./pokemon.js";
import {pokemon2} from "./pokemon2.js";

console.log(pokemon2);

(function(){
    displaypokemon();
})();

function displaypokemon(){
    for(let i = 0; i < pokemon.length; i++){
        $(".window").append(`<div class="pokedex" id="type${pokemon[i].type}">${pokemon[i].name}<img class="img" src="http://www.pokestadium.com/sprites/xy/${pokemon[i].name}.gif" /></div>`)
    }
    for(let x = 0; x < pokemon2.length; x++){
        $(".window").append(`<div class="pokedex" id="type${pokemon2[x].type}">${pokemon2[x].name}<img class="img" src="http://www.pokestadium.com/sprites/xy/${pokemon2[x].name}.gif" /></div>`)
    }
}