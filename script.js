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