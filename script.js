function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    let result

    if (isNaN(num1) || isNaN(num2)) {
        result = "Falta ingresar datos"
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2
                break
            case 'subtract':
                result = num1 - num2
                break
            case 'multiply':
                result = num1 * num2
                break
            case 'divide':
                if (num2 === 0) {
                    result = "No se puede dividir entre cero."
                } else {
                    result = num1 / num2;
                }
                break
        }
    }
    document.getElementById('calc-result').innerText = `Resultado: ${result}`;
}

// Conversiones de Números
function convert(conversionType) {
    let result
    switch (conversionType) {
        case 'binaryToHex':
            result = parseInt(document.getElementById('binary').value, 2).toString(16);
            break
        case 'binaryToDecimal':
            result = parseInt(document.getElementById('binary').value, 2).toString(10);
            break
        case 'hexToBinary':
            result = parseInt(document.getElementById('hexadecimal').value, 16).toString(2);
            break
        case 'decimalToBinary':
            result = parseInt(document.getElementById('decimal').value, 10).toString(2);
            break
        default:
            result = "Conversión no válida."
    }

    document.getElementById('conv-result').innerText = `Resultado: ${result}`;
}

// Análisis de Texto
function analyzeText() {
    const text = document.getElementById('text').value;
    const numChars = text.length;
    const numVowels = text.match(/[aeiouáéíóúü]/gi)?.length || 0;
    const numSigns = text.match(/[.,!?;:]/g)?.length || 0;
    const numSpaces = text.match(/ /g)?.length || 0;
    const numWords = text.match(/\b\w+\b/g)?.length || 0;
    const numDigits = text.match(/\d/g)?.length || 0;

    document.getElementById('text-result').innerHTML = `
        Caracteres: ${numChars}<br>
        Vocales: ${numVowels}<br>
        Signos: ${numSigns}<br>
        Espacios: ${numSpaces}<br>
        Palabras: ${numWords}<br>
        Dígitos: ${numDigits}
    `;
}

// Invertir Cadena de Texto
function invertText() {
    const text = document.getElementById('invert-text').value;
    const invertedText = text.split('').reverse().join('');
    document.getElementById('invert-result').innerText = `Texto Invertido: ${invertedText}`;
}

// Comparar Frases
function comparePhrases() {
    const phrase1 = document.getElementById('phrase1').value;
    const phrase2 = document.getElementById('phrase2').value;
    const wordsPhrase1 = phrase1.match(/\b\w+\b/g)?.length || 0;
    const wordsPhrase2 = phrase2.match(/\b\w+\b/g)?.length || 0;
    let result;

    if (wordsPhrase1 > wordsPhrase2) {
        result = "La primera frase tiene más palabras.";
    } else if (wordsPhrase1 < wordsPhrase2) {
        result = "La segunda frase tiene más palabras.";
    } else {
        result = "Ambas frases tienen la misma cantidad de palabras.";
    }

    document.getElementById('compare-result').innerText = result;
}
// Manejo de Arreglos
function analyzeArray(type) {
    const input = document.getElementById('array-input').value;
    const array = input.split(',').map(Number);
    let result;

    switch (type) {
        case 'primes':
            result = array.filter(isPrime).join(', ');
            break;
        case 'perfects':
            result = array.filter(isPerfect).join(', ');
            break;
        case 'stats':
            const average = array.reduce((sum, num) => sum + num, 0) / array.length;
            const mode = findMode(array);
            result = `Promedio: ${average.toFixed(2)}, Moda: ${mode}`;
            break;
        default:
            result = "Tipo de análisis no válido.";
    }

    document.getElementById('array-result').innerText = `Resultado: ${result}`;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

function findMode(array) {
    const frequency = {};
    let maxFreq = 0;
    let mode;

    array.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mode = num;
        }
    });

    return mode;
}