const razonesList = document.getElementById("razones");

const razones = [
    "Te amo",
    "Te extraño",
    "Quiero remediar mis errores",
    "Tengo celos de Elmer",
    "Me duele el recordar todo lo que vivimos sentimentalmente",
    "Me duele el recordar todo lo que vivimos físicamente",
    "Quiero cumplir el objetivo por el que sacrificamos tanto",
    "Quiero cumplir todas las promesas que hice",
    "Me quiero casar contigo",
    "Quiero demostrar que si puede funcionar el 1° amor",
    "No quiero me recuerdes como lo peor que te ha pasado",
    "Me encanta el tiempo que paso junto a ti",
    "Quiero vivir toda mi vida junto a ti",
    "Me encantas",
    "No voy a encotrar otra chica como tú",
    "Extraño tus te amo",
    "Extraño tus cariños",
    "Extraño tus abrazos",
    "Extraño el tiempo que me dedicabas",
    "Extraño tus mensajes de buenos días",
    "Extraño tu apoyo incondicional hacia mi",
    "Extraño tus cartas y regalos",
    "Extraño tus mensajes cursis",
    "Extraño esos días que pasabamos juntos desde temprano",
    "Extraño verte emocionada por un futuro juntos",
    "Extraño me envies publicaciones a insta",
    "Extraño tener fotos juntos publicadas",
    "Extraño hablar con tu mami y decirle suegra",
    "Extraño presumirte a mis amigos",
    "Extraño decirle a mis amigas que me iba a casar contigo y quieran ser madrinas",
    "Extraño tenernos de fondo de pantalla",
    "Extraño tener nuestra fecha de aniversario de info en WhatsApp",
    "Extraño tomar capturas de nuestras conversaciones cursis",
    "Extraño subir historias de nuestras llamadas de horas",
    "Extraño tu olor en mis sueteres y ropa",
    "Extraño tenerte pegada a mi como koala 24/7",
    "Extraño tomarnos fotos con filtros de Snapchat",
    "Extraño finjir que era el padre de tus gatos",
    "Extraño almorzar junto a ti",
    "Extraño tomarte de la mano",
    "Extraño besarte",
    "Extraño caminar juntos abrazados",
    "Extraño hacer cosas juntos de dudosa legalidad y sentir la adrenalina",
    "Extraño que nos contemos como fue nuestro día por chat",
    "Extraño hacer llamadas contigo",
    "Extraño tener nuestras camas juntos en Minecraft",
    "Extraño que me mandes fotos de ti seguido",
    "Extraño que me mandes foto de tu ropa",
    "Extraño ver videos de 8cho juntos",
    "Extraño que todos nos conozcan como la pareja rical",
    "Extraño todos te conozcan como mi novia",
    "Extraño ir a tu casa y pasar días juntos",
    "Extraño salir contigo y disfrutar un paseo juntos",
    "Extraño como tu eras mi luz entre las tinieblas",
    "Extraño sentir que contigo no necesitaba nada más",
    "Extraño a esa niña que su mayor ilusión era casarse",
    "Extraño que trataras de ponerte bonita para mi cada día",
    "Extraño tu piel",
    "Extraño tus labios",
    "Extraño a mis Gabys :c",
    "Extraño hacer el amor contigo"
];
let razonesText = '';
let i = 0;

document.getElementById("newReason").addEventListener("click", () => {
    if (i < razones.length) {
        razonesText += `<li>${razones[i]}</li>`;
        i++;
    } else {
        razonesText += `<li>Te amo❤</li>`;
    }
    razonesList.innerHTML = razonesText;
})