var minName;
var pokemonContainer = $("#pokemons");
var zeros = "00";
var zero = "0";

$.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/?limit=102`,
    type: 'GET',
    datatype: 'json',
    crossDomain: true
}).done(pokemon).fail(error);


function pokemon(data) {
    for (var i = 1; i < 103; i++) {
        if (i < 10) {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeros}${i}.png">`);
            var paragraph = $('<p>').text(data.results[i - 1].name);

            pokemonContainer.append(picture, paragraph);
        } else if (i <= 99) {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zero}${i}.png">`);
            var paragraph = $('<p>').text(data.results[i - 1].name);
            pokemonContainer.append(picture, paragraph);
        } else {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${i}.png">`);
            var paragraph = $('<p>').text(data.results[i - 1].name);
            pokemonContainer.append(picture, paragraph);
        }
    }
}

function error() {
    alert("No se pueden cargar los datos");
}

/*var template = `<div class="container-pokemon">
                        <img class="responsive-image pok" src=_imagen_/>
                        <p>_namePokemon_</p>
                    </div>`;

function pokemon(data) {
    var newCard = "";
    var namePokem = "";
    var urlImage = "";

    for (var i = 1; i < 807; i++) {
        if (i < 10) {
            urlImage = `"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeros}${i}.png"`;
            namePokem = data.results[i - 1].name
            newCard = template.replace("_imagen", urlImage).replace("namePokemon_", namePokem);
            pokemonContainer.append(newCard);
        } else if (i <= 99) {
            urlImage = `"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zero}${i}.png"`;
            namePokem = data.results[i - 1].name
            newCard = template.replace("_imagen", urlImage).replace("namePokemon_", namePokem);
            pokemonContainer.append(newCard);
        } else {
            urlImage = `"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${i}.png"`;
            namePokem = data.results[i - 1].name
            newCard = template.replace("_imagen", urlImage).replace("namePokemon_", namePokem);
            pokemonContainer.append(newCard);
        }
    }
}

*/




$('#search-poke').click(function(e) {
    e.preventDefault();
    var pokemonName = $('#poke-name').val();
    minName = pokemonName.toLowerCase();
    $("#poke-name").val("");
    getPokemon();

    $('#exampleModal').on('shown.bs.modal', function() {
        $('#myInput').trigger('focus')
    })
})

function getPokemon() {
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${minName}`,
        type: 'GET',
        datatype: 'json',
        crossDomain: true
    }).done(response).fail(error);
}

function response(data) {
    console.log(data);

    var name = data.name;
    var url = data.sprites.front_default;
    var image = `<img src="${url}"/>`;
    var type = data.types[0].type.name;
    var abilities = data.abilities[0].ability.name;
    var abilitiesTwo = data.abilities[1].ability.name;
    var speed = data.stats[0].base_stat;
    var specialDefense = data.stats[1].base_stat;
    var specialAttack = data.stats[2].base_stat;
    var defense = data.stats[3].base_stat;
    var attack = data.stats[4].base_stat;
    var hp = data.stats[5].base_stat;
    var weight = data.weight;
    var totalWeight = weight / 10 + "kg";
    var height = data.height;
    var totalHeight = height / 10 + "m";
    var identificador = data.id;


    var $pidentificador = `# ${identificador}`;
    var $pname = `${name}`;
    var $ptype = `${type}`;
    var $pabilities = `<strong>ABILITIES:</strong> ${abilities}, ${abilitiesTwo}`;
    var $pspeed = `<strong>SPEED:</strong> ${speed}`;
    var $pspecialDefense = `<strong>SP DEF:</strong> ${specialDefense}`;
    var $pspecialAttack = `<strong>SP ATK:</strong> ${specialAttack}`;
    var $pdefense = `<strong>DEFENSE:</strong> ${defense}`;
    var $pattack = `<strong>ATTACK:</strong> ${attack}`;
    var $php = `<strong>HP:</strong> ${hp}`;
    var $pweight = `<strong>WEIGHT:</strong> ${totalWeight}`;
    var $pheight = `<strong>HEIGHT:</strong> ${totalHeight}`;


    $('#namePokemon').html($pname);
    $('#profile-pokemon').html(image);
    $('#identifier').html($pidentificador);
    $('#type').html($ptype);
    $('#abilities').html($pabilities);
    $('#speed').html($pspeed);
    $('#special-defense').html($pspecialDefense);
    $('#special-attack').html($pspecialAttack);
    $('#defense').html($pdefense);
    $('#attack').html($pattack);
    $('#hp').html($php);
    $('#weight').html($pweight);
    $('#height').html($pheight);
}

function error() {
    alert("No se pueden cargar los datos");
}