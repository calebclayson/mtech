var pokemon;
var pokemons = [];

$.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/',
    type: 'GET',
    success: (response) => {
        console.log(response.results);

        pokemon = response.results;
        for(let i = 0; i < pokemon.length; i++) {
            $.ajax({
                url: `http://pokeapi.co/api/v2/pokemon/${i+1}/`,
                type: 'GET',
                success:(response) => {
                    pokemons.push(response);
                }
            })
        }
        list = [];

        (function () {
            displayPokemon();
        })();

        searchforpokemon = function () {
            let findthis = $('.search').val();
            list = [];
            $('.window').html('');
            for (let s = 0; s < pokemon.length; s++) {
                if (pokemon[s].name.toLowerCase().includes(findthis)) {
                    list.push(pokemon[s]);
                }
            }
            displaySearched();
        }

        function displayPokemon() {
            $('.window').html('');
            for (let i = 0; i < pokemon.length; i++) {
                $(".window").append(`
                <div class="pokedex" onmouseover="addinfo(this)" id="${pokemon[i].name.toLowerCase()} ${i}" onmouseleave="hideinfo(this)">
                    <div class="name-img">
                        <span class="name">${pokemon[i].name} #${i + 1}</span>
                        <img class="img" id="${i}" src="https://img.pokemondb.net/artwork/large/${pokemon[i].name.toLowerCase()}.jpg" />
                    </div>
                    
                    <div class="showhide" id="${i}">
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                    </div>
                </div>`);
                $(`#${i}`).on("error", function () {
                    $(`#${i}`).parent().parent().hide();
                });
            }
        }

        function displaySearched() {
            for (let i = 0; i < list.length; i++) {
                $(".window").append(`
                <div class="pokedex" id="${pokemon[i].name.toLowerCase()} #${pokemon.indexOf(list[i]) + 1}" onmouseover="addinfo(this)" onmouseleave="hideinfo(this)">
                    <div class="name-img">
                        <span class="name">${list[i].name} #${pokemon.indexOf(list[i]) + 1}</span>
                        <img id="${i}" class="img" src="https://img.pokemondb.net/artwork/large/${list[i].name.toLowerCase()}.jpg"/>
                    </div>
                    
                    <div class="showhide" id="${i}">
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                    </div>
                </div>`);
                $(`#${i}`).on("error", function () {
                    $(`#${i}`).parent().parent().hide();
                });
            }
        }

        addinfo = function (thiscard) {
            $(thiscard).css('height', '400px').fadeIn("slow");
            $(thiscard).css('width', '400px').fadeIn("slow");
            $(thiscard).promise().done(function () {
                $(thiscard).find(".showhide").fadeIn("slow");
            });
        }

        hideinfo = function (thiscard) {
            $(thiscard).find('.showhide').hide();
            $(thiscard).css('height', '150px').fadeIn("slow");;
            $(thiscard).css('width', '150px').fadeIn("slow");;
        }
    }
});