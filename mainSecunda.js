function suma_numeros_naturales(){
let numero=0, resultado=0,r
numero=parseInt(document.getElementById("suma").value)
    if (numero <= 0 || isNaN(numero)) {
        resultado="Por favor, ingrese un número entero positivo";
    } else {
        for (let i = 1; i <= numero; i++) {
            resultado += i;
        }
    }
r = document.getElementById("resp1")
r.innerHTML =resultado
}
function factorial_numero() {
    let numero = parseInt(document.getElementById("factorial").value);
    let resultado = 1;
    if (numero < 0 || isNaN(numero)) {
        resultado = "Por favor, ingrese un número entero positivo";
    } else {
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
    }
let r = document.getElementById("resp2")
r.innerHTML =resultado
}
function pares_impares() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let resultadoPares = [];
    let resultadoImpares = [];
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resp03").textContent = "Por favor, ingrese dos números enteros.";
        document.getElementById("resp3").textContent = "";
        return;
    }
    let inicio = Math.min(numero1, numero2);
    let fin = Math.max(numero1, numero2);
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            resultadoPares.push(i);
        } else {
            resultadoImpares.push(i);
        }
    }
    let mensajePares = `Pares: ${resultadoPares.join(', ')}.`;
    let mensajeImpares = `Impares: ${resultadoImpares.join(', ')}.`;
    document.getElementById("resp03").textContent = mensajePares;
    document.getElementById("resp3").textContent = mensajeImpares;
}

function generarTablaMultiplicar() {
    let numero = parseInt(document.getElementById("tabla_numero").value);
    let tablaHTML = "";
    if (isNaN(numero)) {
        tablaHTML = "<p>Por favor, ingrese un número entero válido.</p>";
    } else {
        tablaHTML += `<h3>Tabla de multiplicar del ${numero}:</h3>`;
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            tablaHTML += `<li>${numero} x ${i} = ${resultado}</li>`;
        }
    }
    document.getElementById("resultado_tabla").innerHTML = tablaHTML;
}
function generar_tablaSuma() {
    let numero = parseInt(document.getElementById("numero_entero").value);
    let tabla = "";
    if (isNaN(numero) || numero <= 0) {
        tabla = "<p>Por favor, ingrese un número entero positivo válido.</p>";
    } else {
        tabla += `<h3>Tabla de suma del ${numero}:</h3>`;
        tabla += "<ul>";
        for (let i = 1; i <= 10; i++) {
            let resultado = numero + i;
            tabla += `<li>${numero} + ${i} = ${resultado}</li>`;
        }
        tabla += "</ul>";
    }
    document.getElementById("resp5").innerHTML = tabla;
}
function generar_fibonacci() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let resultado = "";
    if (cantidad <= 0 || isNaN(cantidad)) {
        resultado = "Por favor, ingrese un número entero positivo mayor que cero.";
    } else {
        let fibonacci = [];
        if (cantidad >= 1) {
            fibonacci.push(0);
        }
        if (cantidad >= 2) {
            fibonacci.push(1);
        }
        for (let i = 2; i < cantidad; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        resultado = fibonacci.join(', ');
    }
    document.getElementById("resp6").innerHTML = resultado;
}
function numero_perfecto() {
    let numero = parseInt(document.getElementById("numer").value);
    let resultado = "";
    if (numero <= 0 || isNaN(numero)) {
        resultado = "Por favor, ingrese un número entero positivo mayor que cero.";
    } else {
        let sumaDivisores = 0;
        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                sumaDivisores += i;
            }
        }
        if (sumaDivisores === numero) {
            resultado = `${numero} es un número perfecto.`;
        } else {
            resultado = `${numero} no es un número perfecto.`;
        }
    }
    document.getElementById("resp7").innerHTML = resultado;
}
function NumeroPrimo() {
    let numero = parseInt(document.getElementById("num").value);
    let resultado = "";
    
    if (numero <= 1 || isNaN(numero)) {
        resultado = "Por favor, ingrese un número entero positivo mayor que uno.";
    } else {
        let esPrimo = true;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            resultado = `${numero} es un número primo.`;
        } else {
            resultado = `${numero} no es un número primo.`;
        }
    }
    document.getElementById("resp8").innerHTML = resultado;
}