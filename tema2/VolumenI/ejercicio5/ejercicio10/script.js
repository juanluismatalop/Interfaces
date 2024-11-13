let minutos = 0;
let segundos = 0;
let intervalo;

function actualizarCronometro() {
    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minutos++;
    }
    const formatoMinutos = minutos < 10 ? `0${minutos}` : minutos;
    const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos;
    document.getElementById("tiempo").innerText = `${formatoMinutos}:${formatoSegundos}`;
}

document.getElementById("comenzar").addEventListener("click", () => {
    clearInterval(intervalo);
    intervalo = setInterval(actualizarCronometro, 1000);
});

document.getElementById("parar").addEventListener("click", () => {
    clearInterval(intervalo);
});

document.getElementById("resetear").addEventListener("click", () => {
    clearInterval(intervalo);
    minutos = 0;
    segundos = 0;
    document.getElementById("tiempo").innerText = "00:00";
});
