document.addEventListener("DOMContentLoaded", () => {

    const contenedorPetalos = document.querySelector(".petalos");

    // Lista de todos los pétalos
    const imagenesPetalos = [
        "assets/petalos/petalo1.gif",
        "assets/petalos/petalo2.gif",
        "assets/petalos/petalo3.gif",
        "assets/petalos/petalo4.gif",
        "assets/petalos/petalo5.gif",
        "assets/petalos/petalo6.gif"
    ];

    function crearPetalo() {

        const petalo = document.createElement("img");

        // Elegimos un pétalo al azar
        const imagenAleatoria =
            imagenesPetalos[Math.floor(Math.random() * imagenesPetalos.length)];

        petalo.src = imagenAleatoria;
        petalo.alt = "Pétalo";
        petalo.draggable = false;

        petalo.classList.add("item-petalo");

        // Posición horizontal aleatoria
        petalo.style.left = Math.random() * 100 + "vw";

        // Empieza ligeramente por encima de la pantalla
        petalo.style.top = (-Math.random() * 150) + "px";

        // Tamaño aleatorio
        const tamano = Math.random() * 50 + 40;

        

        petalo.style.width = `${tamano}px`;
        petalo.style.height = "auto";

        let duracion;

        // Pétalos grandes (más cerca)
        if (tamano > 60) {

            duracion = Math.random() * 2.5 + 3.5;

            petalo.style.filter =
                "drop-shadow(0px 4px 4px rgba(0,0,0,.15))";

            petalo.style.zIndex = "6";

        }

        // Pétalos pequeños (más lejos)
        else if (tamano < 45) {

            duracion = Math.random() * 4 + 7;

            petalo.style.filter = "blur(1px)";

            petalo.style.zIndex = "4";

        }

        // Pétalos medianos
        else {

            duracion = Math.random() * 3 + 5;

            petalo.style.zIndex = "5";

        }

        petalo.style.animationDuration = `${duracion}s`;

        // Retraso aleatorio
        petalo.style.animationDelay = Math.random() * 3 + "s";

        contenedorPetalos.appendChild(petalo);

        // Eliminamos el pétalo cuando termina
        setTimeout(() => {

            petalo.remove();

        }, (duracion + 3) * 1000);

    }

    // Creamos un pétalo cada 180ms
    setInterval(crearPetalo, 180);

});

// =========================================================
// CONTROL DEL REPRODUCTOR DE MÚSICA Y BUCLE PERSONALIZADO
// =========================================================

// CONFIGURA AQUÍ TU TIEMPO EN SEGUNDOS
const SEGUNDO_INICIO = 72;  // Ejemplo: minuto 1:12 (Cámbialo si quieres)
const SEGUNDO_FIN = 160;    // Ejemplo: minuto 2:40 (Cámbialo si quieres)

function controlarMusica() {
    var musica = document.getElementById("miMusica");
    var boton = document.getElementById("botonMusica");
    
    if (musica.paused) {
        // Si está fuera del rango elegido, forzamos el inicio
        if (musica.currentTime < SEGUNDO_INICIO || musica.currentTime >= SEGUNDO_FIN) {
            musica.currentTime = SEGUNDO_INICIO;
        }
        
        musica.play();
        boton.innerHTML = "⏸️ Pausar Música";
        boton.style.backgroundColor = "#4CAF50"; // Cambia a verde al sonar
        
        // Activamos el vigilante de tiempo para recortar la canción
        musica.addEventListener("timeupdate", verificarBucle);
    } else {
        musica.pause();
        boton.innerHTML = "🎵 Reproducir Música";
        boton.style.backgroundColor = "#ff4081"; // Vuelve a rosa al pausar
    }
}

// Función que revisa los segundos actuales y reinicia el bucle si hace falta
function verificarBucle() {
    var musica = document.getElementById("miMusica");
    if (musica.currentTime >= SEGUNDO_FIN) {
        musica.currentTime = SEGUNDO_INICIO;
    }
}
