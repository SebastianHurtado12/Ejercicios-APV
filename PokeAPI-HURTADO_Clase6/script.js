//llamo a la funcion
cargarListado();
//cargar listado
function cargarListado(){

    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(resp=>resp.json())
        .then(listaPoke =>{
            
            (listaPoke.results).forEach( poke=>
                crearBoton(poke)
            )
            console.log(listaPoke.results);
            }
        )
}
//creacion de botones
function crearBoton(poke){

    let lista=document.getElementById('contenedor-listado');
    lista.innerHTML+=` <button id="${poke.url}" onclick='cargarPokemon(this.id)'>${poke.name}</button> 
                      `//cargarPokemon tiene como argumento la id del buton seleccionado
}

function cargarPokemon(url){
    
    fetch(url)
        .then(resp => resp.json())
        .then(poke =>{
            crearCarta(poke)}
        )
}

//funcion que retorna codigo HTML con el nombre y la imagen del pokemon seleccionado
function crearCarta(poke){

    let cartaPoke=document.getElementById('contenedor-carta');
    cartaPoke.innerHTML=`
                            <h3 class='nomPoke'>${poke.name}</h3>
                            <img class='imgPoke' src='${poke.sprites.front_default}'>
                        `
}