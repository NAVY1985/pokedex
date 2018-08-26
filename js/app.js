(function() {
    function pokemon(data) {
        for (var i = 1; i < 103; i++) {
            if (i < 10) {
                var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${i}.png">`);

            } else if (i <= 99) {
                var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${i}.png">`);

            } else {
                var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${i}.png">`);
            }
            var paragraph = $('<p>').text(data.results[i - 1].name);
            $("#pokemons").append(picture, paragraph);

        }
    }

    function error() {
        alert("No se pueden cargar los datos");
        throw "No se pueden cargar los datos";
    }







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

    $("document").ready(() => {
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
})();