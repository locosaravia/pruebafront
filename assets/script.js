import { agregarSerie } from "./promesas.js";


const boton = document.getElementById('contraste');
boton.addEventListener('click', () => {
    document.body.classList.toggle('contraste');
});


window.addEventListener("load",()=>{
    document.getElementById("btnAgregar").addEventListener("click",()=>{
        console.log("Le diste al boton");
        //Recuperar los elementos del formulario
        let eNombre = document.getElementById("nombre");
        let eDirector = document.getElementById("director");
        let eAnio = document.getElementById("anio");
        let eValoracion = document.getElementById("valoracion");
        let eGenero = document.getElementById("genero");
        let eEpisodios = document.getElementById("episodios");
        let eEdad = document.getElementById("Edad");
        let eOpinion = document.getElementById("Opinio");
        //Recuperar el contenido de los elementos del formulario
        let vNombre = eNombre.value;
        let vDirector = eDirector.value;
        let vAnio = eAnio.value;
        let vValoracion = eValoracion.value;
        let vGenero = eGenero.value;
        let vEpisodios = eEpisodios;
        let vOpinion = eOpinion
        let vEdad = eEdad.checked; 
        console.log(vNombre);
        console.log(vDirector);
        console.log(vAnio);
        console.log(vValoracion);
        console.log(vGenero);
        console.log(vEpisodios);
        console.log(vOpinion);
        console.log(vEdad);
        let serie = {
            'nombre':vNombre,
            'director':vDirector,
            'anio':vAnio,
            'valoracion':vValoracion,
            'genero':vGenero,
            'episodios':vEpisodios,
            'Opinion':vOpinion,
            'Edad':vEdad
        };
        agregarSerie(serie);
        console.log(serie);
    })
})
