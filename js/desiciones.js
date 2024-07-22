let scenarios = [
    { scenario: "Encuentras una cartera en la calle. ¿La recoges?", decision: true },
    { scenario: "Tu amigo te pide ayuda con su tarea. ¿Lo ayudas?", decision: true },
    { scenario: "Ves a alguien siendo acosado. ¿Intervienes?", decision: true },
    { scenario: "Estás cansado y tienes un examen importante mañana. ¿Te quedas despierto hasta tarde?", decision: false },
    { scenario: "Un desconocido te ofrece un aventón a casa. ¿Aceptas?", decision: false }
];

let currentScenario;

function generateScenario() {
    currentScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    document.getElementById('scenario').innerText = currentScenario.scenario;
    document.getElementById('result').innerText = '';
}

function makeDecision(isYes) {
    if (isYes === currentScenario.decision) {
        document.getElementById('result').innerText = '¡Correcto!';
    } else {
        document.getElementById('result').innerText = '¡Incorrecto!';
    }
}

document.getElementById('new-scenario').addEventListener('click', generateScenario);

// Inicializa el juego con un escenario
generateScenario();
