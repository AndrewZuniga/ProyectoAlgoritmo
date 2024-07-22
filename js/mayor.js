function generateExample() {
    // Generar dos números aleatorios entre 1 y 100
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    // Determinar cuál número es mayor
    const isNum1Greater = num1 > num2;

    // Establecer la pregunta y la respuesta correcta
    document.getElementById('question').innerText = `¿Cuál número es mayor, ${num1} o ${num2}?`;
    currentExample = {
        correct: isNum1Greater
    };

    // Limpiar el resultado
    document.getElementById('result').innerText = '';
}

function checkAnswer(isFirstOption) {
    if (isFirstOption === currentExample.correct) {
        document.getElementById('result').innerText = '¡Correcto!';
    } else {
        document.getElementById('result').innerText = '¡Incorrecto!';
    }
}

// Inicializar el juego con una pregunta
generateExample();
