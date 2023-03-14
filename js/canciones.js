//Array con el listado de canciones a mostrar en el reprodutor
let canciones = '';
let indiceActual = 0;
const listadoMusica = document.getElementById('listadoMusica'),
iconPlay = document.getElementById("iconPlay");

function c1(){
    canciones = [
        "Por Eso Te Amo.mp3",
        "Te Voy A Amar.mp3",
        "Dame Una Oportunidad.mp3"
    ];
    newMusic();
}

function c2(){
    canciones = [
        "Me Cambiaste la Vida.mp3",
        "Me Enamoré De Ti.mp3",
        "Amor del Bueno.mp3",
        "A Thousand Years.mp3"
    ];
    newMusic();
}

function c3(){
    canciones = [
        "Como Te Veo.mp3",
        "Junio.mp3",
        "Todo De Ti.mp3",
        "Telepathy.mp3"
    ];
    newMusic();
}

function newMusic(){
    listadoMusica.innerHTML = crearPlayList();
    loadMusic(canciones[0]);
    iconPlay.src = "../resources/play.svg";
}

//Funcion para crear mediante javascript el listado de canciones
function crearPlayList() {
    let cancionesLista = '';
    canciones.map((data)=>{
        cancionesLista += `<li id="${canciones.indexOf(data)}">${data.slice(0, -4)}</li>`;
    });
    return cancionesLista
}

//Función para cargar una canción al hacer click
listadoMusica.onclick = (e) => {
    const itemClick = e.target
    loadMusic(itemClick.innerText+".mp3");
    player.play();
}

//Funcion para control del volumen
document.getElementById("volumen").oninput = (e) => {
    player.volume = e.target.value
}

//Funcion para actualizar la barra de progreso del reprodutor
const updateProgress = () => {
    if (player.currentTime > 0) {
        const barra = document.getElementById('progress')
        barra.value = (player.currentTime / player.duration) * 100

        var duracionSegundos = player.duration.toFixed(0);
        dura = secondsToString(duracionSegundos);
        var actualSegundos = player.currentTime.toFixed(0)
        actual = secondsToString(actualSegundos);

        duracion = actual + ' / ' + dura
        document.getElementById('timer').innerText = duracion
    }
    if (player.ended) {
        nextMusic();//Reproducir la siguiente pista
    }
}

//Funcion para reproducir la proxima cancion
function nextMusic() {
    if (canciones.length == (indiceActual + 1)) {
        var siguiente = 0
    } else {
        var siguiente = indiceActual + 1
    }
    loadMusic(canciones[siguiente]);
    player.play()
    indiceActual = siguiente
}

//Funcion para reproducir la cancion anterior
function prevMusic() {
    if (indiceActual == 0) {
        var anterior = canciones.length - 1
    } else {
        var anterior = indiceActual - 1
    }
    loadMusic(canciones[anterior]);
    player.play()
    indiceActual = anterior
}

//Funcion para cargar las canciones en el reproductor
function loadMusic(ruta) {
    Array.from(document.getElementsByClassName("active")).forEach(element => { element.classList.remove("active"); });
    document.getElementById('source').src = '../resources/music/' + ruta;
    indiceActual = canciones.indexOf(ruta)
    document.getElementById(indiceActual).classList.add("active");
    document.getElementById('currentPlay').innerText = "Reproduciendo: " + ruta.slice(0, -4);
    player.load();
    iconPlay.src = "../resources/pause.svg";
}


//Funcion para pausar o darle play 
function togglePlay() {
    if (player.paused) {
        iconPlay.src = "../resources/pause.svg";
        return player.play();
    } else {
        iconPlay.src = "../resources/play.svg";
        return player.pause();
    }
}

//Funcion para que al dar click sobre la barra de progeso se permita adelantar
progress.addEventListener('click', (e)=>{
    const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;
    player.currentTime = scrubTime;
});

//Funcion para convertir segundos a minutos y horas
function secondsToString(seconds) {
    var hour = "";
    if (seconds > 3600) {
        hour = Math.floor(seconds / 3600);
        hour = (hour < 10) ? '0' + hour : hour;
        hour += ":"
    }
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10) ? '0' + second : second;
    return hour + minute + ':' + second;
}