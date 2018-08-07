



function pokemon(data) {
    // var pokemonContainer = $("#pokemons");
    // Zeros y Zero son dos variables innecesarias (pokemonContainer tambien pero mieh, podriamos dejarla)
    // var zeros = "00";
    // var zero = "0"; 
    for (var i = 1; i < 103; i++) {
        if (i < 10) {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${i}.png">`);
            // Este codigo se repite exactamente tres veces. Que tal si solo se conserva uno para cualquiera que sea el resultado de estos tres ifs?
            // var paragraph = $('<p>').text(data.results[i - 1].name);
            // pokemonContainer.append(picture, paragraph);
        } else if (i <= 99) {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${i}.png">`);
            // var paragraph = $('<p>').text(data.results[i - 1].name);
            // pokemonContainer.append(picture, paragraph);
        } else {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${i}.png">`);
            // var paragraph = $('<p>').text(data.results[i - 1].name);
            // pokemonContainer.append(picture, paragraph);
        }
        var paragraph = $('<p>').text(data.results[i - 1].name);
        $("#pokemons").append(picture, paragraph);

    }
}

function error() {
    alert("No se pueden cargar los datos");
    throw "No se pueden cargar los datos";
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





function getPokemon(minName) {
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${minName}`,
        type: 'GET',
        datatype: 'json',
        crossDomain: true
    }).done(response).fail(error);
}

function response(data) {
    console.log(data);
    // Variables TOTALMENTE Innecesarias :(
    /* 
        //Se hizo una refactorizacion de todo este código. Todas estas variables podrían ser sustituidas por el correcto uso de una template string.
        //como se muestra abajo de este enorme comentario ;).
        var name = data.name;
        var url = data.sprites.front_default;
        var image = `<img src="${data.sprites.front_default}"/>`;
        var type = data.types[0].type.name;
        var abilities = data.abilities[0].ability.name;
        var abilitiesTwo = data.abilities[1].ability.name;
        var speed = data.stats[0].base_stat;
        var specialDefense = data.stats[1].base_stat;
        var specialAttack = data.stats[2].base_stat;
        var defense = data.stats[3].base_stat;
        var attack = data.stats[4].base_stat;
        var identificador = data.id;
        var hp = data.stats[5].base_stat;
            var weight = data.weight;
        var totalWeight = data.weight / 10 + "kg";
        var height = data.height;
        var totalHeight = data.height / 10 + "m";
        $('#profile-pokemon').html();
        $('#identifier').html(`#${data.id}`);
        $('#type').html(`${data.types[0].type.name}`);
        $('#abilities').html(`<strong>ABILITIES:</strong> ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}`);
        $('#speed').html(`<strong>SPEED:</strong> ${data.stats[0].base_stat}`);
        $('#special-defense').html(`<strong>SP DEF:</strong> ${data.stats[1].base_stat}`);
        $('#special-attack').html(`<strong>SP ATK:</strong> ${data.stats[2].base_stat}`);
        $('#defense').html(`<strong>DEFENSE:</strong> ${data.stats[3].base_stat}`);
        $('#attack').html( `<strong>ATTACK:</strong> ${data.stats[4].base_stat}`);
        $('#hp').html(`<strong>HP:</strong> ${data.stats[5].base_stat}`);
        $('#weight').html(`<strong>WEIGHT:</strong> ${data.weight / 10 } Kg`);
        $('#height').html(`<strong>HEIGHT:</strong> ${data.height / 10 } m`);
    
    */
    /*
        Este codigo es mas ligero porque reducimos el niumero de declaracion de variables, asignacion, llamadas al dom
        para seleccionar elementos existentes
        Reescritura de cada elemento seleccionado
    */

    $("#container-profile").html("")
    let template = `
        <figure id="profile-pokemon">
            <img src="${data.sprites.front_default}"/>
        </figure>
        <hr>
        <p id="identifier"> #${data.id}</p>
        <p class="text-white" id="type">
            ${data.types[0].type.name}
        </p>
        <hr>
        <p id="speed">
            <strong>SPEED:</strong> ${data.stats[0].base_stat}
        </p>
        <p id="special-defense">
            <strong>SP DEF:</strong> ${data.stats[1].base_stat}
        </p>
        <p id="special-attack">
            <strong>SP ATK:</strong> ${data.stats[2].base_stat}
        </p>
        <p id="defense">
            <strong>DEFENSE:</strong> ${data.stats[3].base_stat}
        </p>
        <p id="attack">
            <strong>ATTACK:</strong> ${data.stats[4].base_stat}
        </p>
        <p id="hp">
            <strong>HP:</strong> ${data.stats[5].base_stat}
        </p>
        <hr>
        <p id="abilities">
            <strong>ABILITIES:</strong> ${data.abilities[0].ability.name},${data.abilities[1].ability.name}
        </p>
        <p id="weight">
            <strong>WEIGHT:</strong> ${data.weight / 10 } Kg
        </p>
        <p id="height">
            <strong>HEIGHT:</strong> ${data.height / 10 } m
        </p>
    `;
    $('#namePokemon').html(`${data.name}`);
    $("#container-profile").append(template);
}
// Tienes esta misma funcion dos veces ¿?
// function error() {
//     alert("No se pueden cargar los datos");
// }

$("document").ready(()=>{
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/?limit=102`,
        // Reduce el numero de elementos llamados en la API. Te reto a que implementes una paginación para cargar los elementos a demanda de ellos
        // Tal vez de 20 en 20 seria un buen numero 102 Elementos son muchos para la usabilidad del producto. 
        // (y eso ayudaria a limpiar las condiciones de la funcion pokemon)
        type: 'GET',
        datatype: 'json',
        crossDomain: true
    }).done(pokemon).fail(error);
    
    $('#search-poke').click(function(e) {
        e.preventDefault();
        var pokemonName = $('#poke-name').val();
        // Solo se hace uso de minName cuando queremos obtener un pokemon por busqueda entonces no tiene sentido tenerla como variable global
        var minName = pokemonName.toLowerCase();
        $("#poke-name").val("");
        getPokemon(minName);
    })
    $('#exampleModal').on('shown.bs.modal', function() {
        $('#myInput').trigger('focus')
    })


})