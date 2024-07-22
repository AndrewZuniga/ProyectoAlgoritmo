function generateSequence() {
    const base = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    let sequence = [];
    for (let i = 0; i < 5; i++) {
        sequence.push(base + i * step);
    }
    return sequence;
}

function displaySequence(sequence) {
    const sequenceContainer = document.getElementById('sequence-container');
    sequenceContainer.innerHTML = '';
    for (let i = 0; i < sequence.length - 1; i++) {
        const span = document.createElement('span');
        span.textContent = sequence[i];
        sequenceContainer.appendChild(span);
        if (i < sequence.length - 2) {
            const comma = document.createElement('span');
            comma.textContent = ', ';
            sequenceContainer.appendChild(comma);
        }
    }
    const input = document.createElement('input');
    input.type = 'number';
    input.id = 'num1';
    sequenceContainer.appendChild(input);
}

function checkSequence(sequence, userSequence) {
    const result = document.getElementById('result');
    if (sequence[sequence.length - 1] === parseInt(userSequence[0])) {
        result.textContent = '¡Correcto!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Inténtalo de nuevo.';
        result.style.color = 'red';
    }
}

let currentSequence = generateSequence();
displaySequence(currentSequence);

document.getElementById('sequence-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const num1 = document.getElementById('num1').value;
    checkSequence(currentSequence, [num1]);
});

document.getElementById('new-sequence').addEventListener('click', function() {
    currentSequence = generateSequence();
    displaySequence(currentSequence);
    document.getElementById('result').textContent = '';
    document.getElementById('num1').value = '';
});
