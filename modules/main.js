import {pokemon} from "./pokemon.js";

window.list =  [];
window.type = "default";

(function(){
    displayPokemon();
})();

window.runSomething = function (){
    if($('.select-selected').html() == "Normal"){
        window.type = "default";
        displayPokemon();
    } else if($('.select-selected').html() == "Art"){
        window.type = "art";
        displayArtPokemon();
    } else if($('.select-selected').html() == "Shiny"){
        window.type = "shiny";
        displayShinyPokemon();
    }
    window.searchforpokemon();
}

window.searchforpokemon = function (){
    let findthis = $('.search').val();
    window.list = [];
    $('.window').html('');
    for(let s = 0; s < pokemon.length; s++){
        if(pokemon[s].toLowerCase().includes(findthis)){
            window.list.push(pokemon[s]);
        } 
        
    }
    if(list.length < 1){
            window.type = "undefined";
    }

    displaySearched();

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

function displaySearched(){
    if(window.type == "default"){
        for(let i = 0; i < window.list.length; i++){
            $(".window").append(`<div class="pokedex" ><span class="name">${window.list[i]} #${pokemon.indexOf(window.list[i]) + 1}</span><img class="img" src="http://www.pokestadium.com/sprites/xy/${window.list[i].toLowerCase()}.gif" onerror="this.src='http://www.pokestadium.com/sprites/xy/${window.list[i].toLowerCase()}.gif'"/></div>`)
        }
    }
    else if(window.type == "art"){
        for(let i = 0; i < window.list.length; i++){
            $(".window").append(`<div class="pokedex" ><span class="name">${window.list[i]} #${pokemon.indexOf(window.list[i]) + 1}</span><img class="art" src="http://www.pokestadium.com/assets/img/sprites/official-art/${window.list[i].toLowerCase()}.png" onerror="this.src='http://www.pokestadium.com/sprites/xy/${window.list[i].toLowerCase()}.gif'"/></div>`)
        }
    }
    else if(window.type == "shiny"){
        for(let i = 0; i < window.list.length; i++){
            $(".window").append(`<div class="pokedex" ><span class="name">${window.list[i]} #${pokemon.indexOf(window.list[i]) + 1}</span><img class="img" src="http://www.pokestadium.com/sprites/xy/shiny/${window.list[i].toLowerCase()}.gif" onerror="this.src='http://www.pokestadium.com/sprites/xy/${window.list[i].toLowerCase()}.gif'"/></div>`)
        }
    } else if(window.type == "undefined") {
        $(".window").append("<div class='undefined'>Not Found</div>");
    }
}





var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);